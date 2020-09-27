import React from "react";
import Helmet from "react-helmet";
import $ from "jquery";
import moment from "moment";

import API from "./../../utils/API";
import {translateGender} from "../../utils/helperFunctions";

import {PRIVACY_PRIVATE, PRIVACY_LOCAL, PRIVACY_PUBLIC} from "../../constants";

import headerImg from "./header.svg";

import "./Profile.css";
import messages from "../../i18n/messages";

class Profile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Activate Tooltip, if page loaded
        if (prevState.user === null && this.state.user !== null) {
            $("[data-toggle='tooltip']").tooltip();
        }
    }

    componentWillMount() {
        this.fetchUser(this.props.match.params.username);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.match.params.username !== nextProps.match.params.username) {
            this.fetchUser(nextProps.match.params.username);
        }
    }

    fetchUser(username) {
        if (username) {
            API.getInstance()._fetch("/users/?username=" + username)
                .then(response => {
                    if (response && response.total > 0 && response.data) {
                        this.setState({user: response.data[0]});
                    }
                });
        }
    }

    renderTooltip(privacySetting) {
        switch (privacySetting) {
            case PRIVACY_PRIVATE:
                return <i className="fas fa-lock small" title="Nur für Dich sichtbar" data-toggle="tooltip"/>;
            case PRIVACY_LOCAL:
                return <i className="fas fa-users small" title="Für alle Benutzer sichtbar, die einen Account haben und angemeldet sind" data-toggle="tooltip"/>;
             case PRIVACY_PUBLIC:
                return <i className="fas fa-globe small" title="Für alle Benutzer sichtbar" data-toggle="tooltip"/>;
            default:
                return;
        }
    }

    render() {
        let { user } = this.state,
            usernameFromUrl = this.props.match.params.username;
        const { intl:{formatMessage} } = this.props;
        const hardwareUnspecifiedText = <span className="disabled-text">Nicht angegeben</span>;
        if (user === null) {
            return (
                <div id="profile" className="view full-container profile">
                    <Helmet><title>Profil von {usernameFromUrl} - {formatMessage(messages.helmetDefault)}</title></Helmet>
                    <div className="container">
                        <div className="row header">
                            <img src={headerImg} alt="" />
                        </div>
                        <h1>Profil von {usernameFromUrl} lädt ...</h1>
                    </div>
                </div>
            );
        }
        return (
            <div id="profile" className="view full-container profile">
                <Helmet><title>{user.username} - BattleBulls</title></Helmet>
                <div className="container">
                    <div className="row header">
                        <img src={headerImg} alt="" />
                        <div className="username">{user.username}</div>
                    </div>
                    <h1><i className="far fa-address-card highlighted-text" /> Profil von {user.username}</h1>
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="nav nav-tabs flex-column light">
                                <li className="nav-item"><a href="#info" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="info"><i className="fas fa-info fa-fw"/> Infos</a></li>
                                <li className="nav-item"><a href="#hardware" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="hardware"><i className="fas fa-desktop fa-fw"/> Hardware</a></li>
                                <li className="nav-item"><a href="#games" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="games"><i className="fas fa-gamepad fa-fw"/> Games</a></li>
                                <li className="nav-item"><a href="#team" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="team"><i className="fas fa-users fa-fw"/> Team</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 tab-content">
                            <div id="info" className="collapse show" data-parent="#profile">
                                <h3>Informationen</h3>
                                {
                                    user.firstName || user.lastName ? (
                                         <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-3">Name</div>
                                                <div className="col-sm-9">{user.firstName ? <span>{user.firstName} {this.renderTooltip(user.privacy.firstName)}</span> : null} {user.lastName ? <span>{user.lastName} {this.renderTooltip(user.privacy.lastName)}</span> : null}</div>
                                            </div>
                                            <div className="divider"/>
                                        </React.Fragment>
                                    ) : null
                                }
                                <div className="row">
                                    <div className="col-sm-3">Benutzername</div>
                                    <div className="col-sm-9">{user.username}</div>
                                </div>
                                <div className="divider"/>
                                {
                                    user.city ? (
                                        <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-3">Wohnort</div>
                                                <div className="col-sm-9">{user.city} {this.renderTooltip(user.privacy.city)}</div>
                                            </div>
                                            <div className="divider"/>
                                        </React.Fragment>
                                    ) : null
                                }
                                {
                                    user.country ? (
                                        <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-3">Land</div>
                                                <div className="col-sm-9">{user.country} {this.renderTooltip(user.privacy.country)}</div>
                                            </div>
                                            <div className="divider"/>
                                        </React.Fragment>
                                    ) : null
                                }
                                {
                                    user.gender ? (
                                        <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-3">Geschlecht</div>
                                                <div className="col-sm-9">{translateGender(user.gender)} {this.renderTooltip(user.privacy.gender)}</div>
                                            </div>
                                            <div className="divider"/>
                                        </React.Fragment>
                                    ) : null
                                }
                                {
                                    user.birthDate ? (
                                        <React.Fragment>
                                            <div className="row">
                                                <div className="col-sm-3">Geburtstag</div>
                                                <div className="col-sm-9">{moment(user.birthDate).format("DD.MM.YYYY")} {this.renderTooltip(user.privacy.birthDate)}</div>
                                            </div>
                                            <div className="divider"/>
                                        </React.Fragment>
                                    ) : null
                                }
                                {
                                    user.bio ? (
                                        <div className="bio">
                                            <h5 className="highlighted-text">Dein Weg zu den Bullen: {this.renderTooltip(user.privacy.bio)}</h5>
                                            <p>{user.bio}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div id="hardware" className="collapse" data-parent="#profile">
                                <h3>Hardwareübersicht</h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Gehäuse</h5>
                                        <p>{user.hardware.case || hardwareUnspecifiedText}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">CPU</h5>
                                        <p>{user.hardware.processor || hardwareUnspecifiedText}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Mainboard</h5>
                                        <p>{user.hardware.motherboard || hardwareUnspecifiedText}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Arbeitsspeicher</h5>
                                        <p>{user.hardware.memory || hardwareUnspecifiedText}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Grafikkarte</h5>
                                        <p>{user.hardware.graphicsCard || hardwareUnspecifiedText}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Netzteil</h5>
                                        <p>{user.hardware.powerSupply || hardwareUnspecifiedText}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Monitor</h5>
                                        <p>{user.hardware.monitor || hardwareUnspecifiedText}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Maus</h5>
                                        <p>{user.hardware.mouse || hardwareUnspecifiedText}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Tastatur</h5>
                                        <p>{user.hardware.keyboard || hardwareUnspecifiedText}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="highlighted-text">Mauspad</h5>
                                        <p>{user.hardware.mousePad || hardwareUnspecifiedText}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="games" className="collapse" data-parent="#profile">
                                <h3>Lieblingsspiele</h3>
                                <p>{user.games}</p>
                            </div>
                            <div id="team" className="collapse" data-parent="#profile">
                                <h3>Team</h3>
                                <p>{user.clan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
