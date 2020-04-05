import React from "react";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";
import $ from "jquery";

import ServerDetailView from "../../components/ServerDetailView/ServerDetailView";

import {LINK_TWITCH} from "../../constants";
import messages from "../../i18n/messages";

import ScumLogo from "./img/scum-logo.png";

import "./Scum.css";

class Scum extends React.PureComponent {

    componentDidMount() {
        $("[data-toggle='tooltip']").tooltip();
    }

    render() {
        const { intl:{formatMessage} } = this.props;
        return (
            <div className="full-container view scum">
                <div className="container">

                    <Helmet><title>Scum - BattleBulls</title></Helmet>

                    <div className="row">
                        <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                            <img src={ScumLogo} alt="Scum" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                            <ServerDetailView
                                serverName="BattleBulls Community"
                                ipAddress="176.57.168.14"
                                port="28702"
                                password="bulls4life"
                                slots={20}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                            <a href={LINK_TWITCH} className="btn large twitch" target="_blank" rel="noopener noreferrer">{formatMessage(messages.btnTwitch)}</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default injectIntl(Scum);
