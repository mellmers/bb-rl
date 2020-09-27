import React from 'react';
import $ from 'jquery';
import {FormattedHTMLMessage, injectIntl} from "react-intl";
import messages from "../../i18n/messages";
import Link from "../Link/Link";

class Rules extends React.PureComponent {

    componentDidMount() {
        $(this.refs.rules).on("shown.bs.collapse hidden.bs.collapse", function () {
            $.fn.fullpage.reBuild();
        });
    }

    render() {
        const { intl:{formatMessage} } = this.props;
        return (
            <div ref="rules" className="section regeln">
                <div className="container">
                    <div className="inner" id="rules-container">
                        <h2><FormattedHTMLMessage {...messages.tournamentRules}/></h2>

                        <p className="text-uppercase text-muted">{formatMessage(messages.ruleNotice)}</p>

                        <div data-toggle="collapse" data-target="#allgemein" role="button"
                            aria-controls="allgemein">{formatMessage(messages.ruleHeadGeneral)}</div>
                        <div className="collapse show" id="allgemein" data-parent="#rules-container">
                              <p>
                                  <FormattedHTMLMessage {...messages.ruleGeneral}/>
                              </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#registration" role="button"
                            aria-controls="registration">{formatMessage(messages.ruleHeadTeam)}</div>
                        <div className="collapse" id="registration" data-parent="#rules-container">
                            <FormattedHTMLMessage {...messages.ruleTeam}/>
                            <p>
                                {formatMessage(messages.ruleSignIn)} <Link messageId="route.tournamentRegistration" params={{teams: ""}} className="link-dark">{formatMessage(messages.ruleSignInForm)}</Link>
                            </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#tournament" role="button"
                            aria-controls="tournament">{formatMessage(messages.ruleHeadTournament)}</div>
                        <div className="collapse" id="tournament" data-parent="#rules-container">
                            <p>
                                <FormattedHTMLMessage {...messages.ruleTournament}/>
                            </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#winner" role="button"
                            aria-controls="winner">{formatMessage(messages.ruleHeadWinner)}</div>
                        <div className="collapse" id="winner" data-parent="#rules-container">
                            <p>
                                <FormattedHTMLMessage {...messages.ruleWinner}/>
                            </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#general-tournament" role="button"
                            aria-controls="general-tournament">{formatMessage(messages.ruleHeadProcedure)}</div>
                        <div className="collapse" id="general-tournament" data-parent="#rules-container">
                            <p>
                                <FormattedHTMLMessage {...messages.ruleProcedure}/>
                            </p>
                            <p><a className="link-dark" href="https://www.twitch.tv/BattleBullsTV" target="_blank" rel="noopener noreferrer">{formatMessage(messages.toTwitch)}</a></p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#commands" role="button"
                            aria-controls="commands">{formatMessage(messages.ruleHeadCommands)}</div>
                        <div className="collapse" id="commands" data-parent="#rules-container">
                            <p>
                                <FormattedHTMLMessage {...messages.ruleCommands} />
                            </p>
                        </div>

                    </div>
                </div>

                <div className="scroll-down"><i className="fa fa-chevron-down"/>{formatMessage(messages.scrollDown)}</div>
            </div>
        );
    }
}

export default injectIntl(Rules);
