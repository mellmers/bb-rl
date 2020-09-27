import React, {PureComponent} from "react";
import {Helmet} from "react-helmet";

import ReactGAUtil from "../../utils/ReactGAUtil";

import {COOKIE_OPT_OUT} from "../../constants";

export default class GAOptOut extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            optOut: document.cookie.indexOf(COOKIE_OPT_OUT + "=true") > -1
        };

        this.optOut = this.optOut.bind(this);
        this.optIn = this.optIn.bind(this);
    }

    createCookie(name, value, days) {
        let expires;
        if (days) {
            let date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    }

    optOut() {
        this.createCookie(COOKIE_OPT_OUT, true, 365*20);
        this.setState({ optOut: true });

        ReactGAUtil.sendEvent("GA", "Opt-Out", "GA Opt-In-Out");

        this.reloadPage();
    }

    optIn() {
        this.createCookie(COOKIE_OPT_OUT, false,365*20);
        this.setState({ optOut: false });

        ReactGAUtil.sendEvent("GA", "Opt-In", "GA Opt-In-Out");

        this.reloadPage();
    }

    reloadPage() {
        window.location.reload();
    }

    render() {
        let { optOut } = this.state,
            btnFunc = this.optOut,
            btnText = "Opt-Out";
        if (optOut) {
            btnFunc = this.optIn;
            btnText = "Opt-In";
        }
        return (
            <div className="view full-container">
                <Helmet><title>Opt-Out - BattleBulls</title></Helmet>

                <div className="container text-center">
                    <h1>Google Analytics - Opt {optOut ? "In" : "Out"}</h1>
                    <button className="btn primary large" onClick={btnFunc} style={{display: "inline-block"}}>{btnText}</button>
                </div>
            </div>
        );
    }
}
