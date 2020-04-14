import * as CONSTANTS from "../constants";
import $ from "jquery";
import includes from "lodash/includes";

import {logout, updateUser} from "./../actions/ApplicationActions";
import store from "./../store";

export default class API {

    constructor() {
        this.user = store.getState().application.user;
    }

    /**
     * @returns API instance
     */
    static getInstance() {
        if (!this["singleton"]) {
            this["singleton"] = new API();
        }
        return this["singleton"];
    }

    async login(data) {
        return new Promise( (resolve, reject) => {
            this._fetch("/authentication/", "POST", {
                username: data.username,
                password: data.password,
                strategy: "local"
            }, null, null).then(auth => {
                if (auth && auth.accessToken && auth.user) {
                    this.user = $.extend(auth.user, { accessToken: auth.accessToken });
                    resolve(auth.user);
                }

                /* ACCESS TOKEN
                if (auth.access && auth.refresh) {
                    this._fetch("/users/me/", "GET", null, null, {
                        "Authorization": "Bearer " + auth.access
                    }).then(user => {
                        if (user.id && user.username) {
                            user = $.extend(user, { accessToken: auth.access, refreshToken: auth.refresh });

                            this.user = user;
                            resolve(user);
                        }
                    }).catch(error => {
                        reject({error: this._parseError(error)});
                    });
                }
                */
            }).catch(error => {
                reject({error: this._parseError(error)});
            });
        });
    }

    logout() {
        this.user = null;
    }

    _fetch(url, method = "GET", body = null, query = null, header = {}, contentType = "application/json") {
        let dfr = $.Deferred();

        if (url.indexOf("http") === -1) {
            let defaultHeaders = {
              "Accept": "application/json",
              "Content-Type": contentType
            };
            if (this.user) {
                console.log(this.user)
              defaultHeaders.Authorization = "Bearer " + this.user.accessToken;
            }
            header = $.extend({}, defaultHeaders, header);
            if (process.env.REACT_APP_API === "local") {
                url = CONSTANTS.API_ROUTE_LOCAL + url;
            } else if (process.env.REACT_APP_API === "dev") {
                url = CONSTANTS.API_ROUTE_DEV + url;
            } else if (process.env.REACT_APP_API === "local_prod") {
                url = CONSTANTS.API_ROUTE_LOCAL_PROD + url;
            } else {
                url = CONSTANTS.API_ROUTE + url;
            }
        }

        let headers = new Headers();
        for (let key in header) {
            if (!header.hasOwnProperty(key)) continue;
            headers.append(key, header[key]);
        }

        if (query) {
            url += "?";
            let keys = Object.keys(query);
            keys.forEach((key, index) => {
                if (!query.hasOwnProperty(key)) return;
                url += key + "=" + query[key];
                if (keys.length-1 > index) {
                    url += "&";
                }
            });
        }

        fetch(url, {
            headers: headers,
            body: body ? JSON.stringify(body) : null,
            method: method
        })
            .then(this._parseJson)
            .then(json => {
                // on unauthorized
                if (json.messages && json.messages[0].token_type === "access" && this.user && this.user.refreshToken) {
                    // try to get new access token
                    this._fetch("/token/refresh/", "POST", {refresh: this.user.refreshToken}, null, null)
                        .then(auth => {
                            if (auth.access) {
                                this.user.accessToken = auth.access;

                                // save user in app state and api state
                                store.dispatch(updateUser(this.user));

                                header.Authorization = "Bearer " + auth.access;
                                this._fetch(url, method, body, query, header, contentType);
                                dfr.resolve(this.user);
                            } else {
                                // Logout
                                this.user = null;
                                store.dispatch(logout());
                                dfr.reject({error: this._parseError()});
                            }
                        }).catch(error => {
                            // Logout
                            this.user = null;
                            store.dispatch(logout());
                            dfr.reject({error: this._parseError(error)});
                        });
                }

                // on error
                if (json.error) {
                    console.error("Status: " + json.status + ", Error: " + json.error + ", Message: " + json.message);
                    dfr.reject(this._parseError(json));
                }

                dfr.resolve(json);
            })
            .catch(error => {
                console.error("Unexpected Error in API", error);
                dfr.reject({error: this._parseError(error)});
            });
        return dfr;
    }

    _parseJson(response) {
        return includes([204, 409], response.status) ? { status: response.status, error: true, message: response.statusText } : response.json()
    }

    _parseError(error) {
        if (error && error.message) {
            switch (error.message) {
                default:
                    return {
                        message: "Unbekannter Fehler - Bitte kontaktiere einen Admin",
                        apiMessage: error.message
                    };
            }
        } else {
            return error;
        }
    }
}
