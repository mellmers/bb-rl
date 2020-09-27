import React from "react";
import $ from "jquery";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";
import messages from "../../i18n/messages";

import {EMAIL_SUPPORT} from "../../constants";

import ReCAPTCHA from "../../components/ReCAPTCHA/ReCAPTCHA";

import "./TournamentRegistration.css";

class TournamentRegistration extends React.PureComponent {

    constructor(props) {
        super(props);

        this.execRecaptcha = this.execRecaptcha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            result: null,
            recaptcha: false,
            sending: false
        };
    }
    execRecaptcha(e) {
        e.preventDefault(e);

        this.onSubmit({success: true});

        // this.setState({
        //     result: null,
        //     recaptcha: true,
        //     sending: false
        // });
        //
        // ReCAPTCHA.execute(e);
    }

    onSubmit(recaptchaResponse) {
        console.log("real submit", recaptchaResponse);
        // Valid Recaptcha
        if (recaptchaResponse.success) {
            fetch("/php/tournament-registration.php", {
                body: JSON.stringify($("form").serialize()),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({result: json, recaptcha: false, sending: false});
                })
                .catch(error => {
                    this.setState({result: { code: "unknown-error" }, recaptcha: false, sending: false});
                    console.error("Unexpected error in tournament registration: ", error);
                });
        } else {
            this.setState({result: { code: "recaptcha-not-valid" }, recaptcha: false, sending: false});
        }
    }

    renderInfo() {
        let render = "";
        const {intl:{formatMessage}} = this.props;
        const { recaptcha, sending } = this.state;
        if (recaptcha) {
            render = <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoRecaptcha)}</div>
        } else if (sending) {
            render = <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoMailSending)}</div>
        }
        return render;
    }

    renderResult() {
        const {intl:{formatMessage}} = this.props;
        let { result } = this.state;
        let render = null;
        let formData = $("form").serializeObject();
        if (result) {
            switch (result.code) {
                case "mail-sent-with-confirmation":
                    render = <div className="alert alert-success" role="alert">{formatMessage(messages.tournamentRegistrationFeedback1)} {formData.mail} {formatMessage(messages.tournamentRegistationFeedback11)}</div>;
                    break;
                case "mail-sent":
                    render = <div className="alert alert-success" role="alert">{formatMessage(messages.tournamentRegistrationFeedback2)}</div>;
                    break;
                case "mail-not-sent":
                    render = <div className="alert alert-danger" role="alert">{formatMessage(messages.tournamentRegistrationFeedback3)} (<a href={"mailto:" + EMAIL_SUPPORT}>{EMAIL_SUPPORT}</a>).</div>;
                    break;
                case "recaptcha-not-valid":
                    render = <div className="alert alert-danger" role="alert">{formatMessage(messages.tournamentRegistrationFeedback4)} (<a href={"mailto:" + EMAIL_SUPPORT}>{EMAIL_SUPPORT}</a>).</div>;
                    break;
                case "unknown-error":
                    render = <div className="alert alert-danger" role="alert">{formatMessage(messages.tournamentRegistrationFeedback5)} (<a href={"mailto:" + EMAIL_SUPPORT}>{EMAIL_SUPPORT}</a>).</div>;
                    break;
                default:
                    break;
            }
        }
        return render;
    }

    render() {
        const {intl:{formatMessage}} = this.props;
        let { recaptcha, sending } = this.state;
        let teams = this.props.match.params ? this.props.match.params.teams : null;
        return (
            <div className="view full-container tournament-registration">
                <Helmet><title>{formatMessage(messages.tournamentRegistrationHead)}</title></Helmet>
                <div className="container">
                    <h1>{formatMessage(messages.tournamentRegistrationHead2)} {teams}</h1>
                    <form onSubmit={this.execRecaptcha}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTeamName">{formatMessage(messages.tournamentRegistrationInputName)}</label>
                                <input type="text" name="Team-Name" className="form-control blue" id="inputTeamName" placeholder="Teamname" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1">{formatMessage(messages.tournamentRegistrationMember1)}</label>
                                <input type="text" name="Mitglied 1" className="form-control blue" id="inputMember1" placeholder="Mitglied 1" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1Rank">{formatMessage(messages.tournamentRegistrationRank1)}</label>
                                <select name="Rank Mitglied 1" id="inputMember1Rank" className="form-control blue" required>
                                    <option>Bronze 1</option>
                                    <option>Bronze 2</option>
                                    <option>Bronze 3</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 3</option>
                                    <option>Gold 1</option>
                                    <option>Gold 2</option>
                                    <option>Gold 3</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 3</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 3</option>
                                    <option>Champion 1</option>
                                    <option>Champion 2</option>
                                    <option>Champion 3</option>
                                    <option>Grand Champ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember2">{formatMessage(messages.tournamentRegistrationMember2)}</label>
                                <input type="text" name="Mitglied 2" className="form-control blue" id="inputMember2" placeholder="Mitglied 2" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember2Rank">{formatMessage(messages.tournamentRegistrationRank2)}</label>
                                <select name="Rank Mitglied 2" id="inputMember2Rank" className="form-control blue" required>
                                    <option>Bronze 1</option>
                                    <option>Bronze 2</option>
                                    <option>Bronze 3</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankSilver)} 3</option>
                                    <option>Gold 1</option>
                                    <option>Gold 2</option>
                                    <option>Gold 3</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankPlatinum)} 3</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 1</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 2</option>
                                    <option>{formatMessage(messages.tournamentRankDiamond)} 3</option>
                                    <option>Champion 1</option>
                                    <option>Champion 2</option>
                                    <option>Champion 3</option>
                                    <option>Grand Champ</option>
                                </select>
                            </div>
                        </div>
                        { teams === "3vs3" ? (
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMember3">{formatMessage(messages.tournamentRegistrationMember3)}</label>
                                    <input type="text" name="Mitglied 3" className="form-control blue" id="inputMember3" placeholder="Mitglied 3" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMember3Rank">{formatMessage(messages.tournamentRegistrationRank3)}</label>
                                    <select name="Rank Mitglied 3" id="inputMember3Rank" className="form-control blue" required>
                                        <option>Bronze 1</option>
                                        <option>Bronze 2</option>
                                        <option>Bronze 3</option>
                                        <option>{formatMessage(messages.tournamentRankSilver)} 1</option>
                                        <option>{formatMessage(messages.tournamentRankSilver)} 2</option>
                                        <option>{formatMessage(messages.tournamentRankSilver)} 3</option>
                                        <option>Gold 1</option>
                                        <option>Gold 2</option>
                                        <option>Gold 3</option>
                                        <option>{formatMessage(messages.tournamentRankPlatinum)} 1</option>
                                        <option>{formatMessage(messages.tournamentRankPlatinum)} 2</option>
                                        <option>{formatMessage(messages.tournamentRankPlatinum)} 3</option>
                                        <option>{formatMessage(messages.tournamentRankDiamond)} 1</option>k
                                        <option>{formatMessage(messages.tournamentRankDiamond)} 2</option>
                                        <option>{formatMessage(messages.tournamentRankDiamond)} 3</option>
                                        <option>Champion 1</option>
                                        <option>Champion 2</option>
                                        <option>Champion 3</option>
                                        <option>Grand Champ</option>
                                    </select>
                                </div>
                            </div>
                        ) : null}
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember1">{formatMessage(messages.tournamentRegistrationSteam1)}</label>
                            <input type="url" name="Steam Link Mitglied 1" className="form-control blue" id="inputSteamLinkMember1" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember2">{formatMessage(messages.tournamentRegistrationSteam2)}</label>
                            <input type="url" name="Steam Link Mitglied 2" className="form-control blue" id="inputSteamLinkMember2" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                        </div>
                        { teams === "3vs3" ? (
                            <div className="form-group">
                                <label htmlFor="inputSteamLinkMember3">{formatMessage(messages.tournamentRegistrationSteam3)}</label>
                                <input type="text" name="Steam Link Mitglied 3" className="form-control blue" id="inputSteamLinkMember3" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                            </div>
                        ) : null}
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputDevice">{formatMessage(messages.tournamentRegistrationPlatform)}</label>
                                <select name="Plattform" id="inputDevice" className="form-control blue" required>
                                    <option>PC</option>
                                    <option>XBOX</option>
                                    <option>Playstation 4</option>
                                    <option>Nintendo Switch</option>
                                </select>
                                </div>
                            </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">{formatMessage(messages.tournamentRegistrationSignInFeedback)}</label>
                            <input type="email" name="mail" className="form-control blue" id="inputSuccessfulCheckIn" placeholder={formatMessage(messages.contactFormRequestConfirmationMailPlaceholder)}/>
                        </div>
                        <div className="form-group">
                            <label>{formatMessage(messages.tournamentRegistrationRequired)}</label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-xs-auto">
                                {recaptcha || sending ? <button className="btn white disabled" disabled>{formatMessage(messages.tournamentRegistrationSignIn)} <i className="fas fa-cog fa-spin" /></button> : <button type="submit" className="btn white">{formatMessage(messages.tournamentRegistrationSignIn)}</button>}
                            </div>
                            <div className="form-group col-xs-auto">
                                {this.renderInfo()}
                            </div>
                        </div>

                        {/*<ReCAPTCHA callback={this.onSubmit} />*/}

                        {this.renderResult()}
                    </form>
                </div>
            </div>
        );
    }
}
export default injectIntl(TournamentRegistration);
