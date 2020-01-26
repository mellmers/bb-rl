import * as CONSTANTS from "../constants";
import $ from "jquery";
import includes from "lodash/includes";

export default class API {

    /**
     * @returns API instance
     */
    static getInstance() {
        if (!this["singleton"]) {
            this["singleton"] = new API();
        }
        return this["singleton"];
    }

    // Add Basic Auth to Cookie
    login(data) {
    }

    // Remove Basic Auth from Cookie
    logout() {
    }

    _fetch(url, method = "GET", body = null, query = null, header = {}, contentType = "application/json") {
        let dfr = $.Deferred();

        if (url.indexOf("http") === -1) {
            header = $.extend({}, {
                "Accept": "application/json",
                "Content-Type": contentType
            }, header);
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
        return includes([204, 401, 409], response.status) ? { status: response.status, error: true, message: response.statusText } : response.json()
    }

    _parseError(error) {
        if (error && error.message) {
            switch (error.message) {
                default:
                    return {
                        message: "Unbekannter Fehler - Bitte kontaktiere einen Admin"
                    };
            }
        } else {
            return error;
        }
    }
}
