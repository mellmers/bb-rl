import React from "react";
import {injectIntl} from "react-intl";

import Link from "../../components/Link/Link";
import messages from "../../i18n/messages";

import "./NewsHomepage.css";

import logoTeamspeak from "./img/teamspeak-logo.png";

class NewsHomepage extends React.PureComponent {
    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div className="section news">
                <div className="container-fluid">
                    <div className="inner">
                        <div className="card">
                            <h2 className="heading">Werde ein Bulle</h2>
                            <ul>
                                <li>Wir suchen dich!</li>
                                <li>Joine unserer Community</li>
                                <li>Spiele nie wieder mit Randoms</li>
                                <li>Viele Spiele zur Auswahl</li>
                                <li>Kostenloser Teamspeak</li>
                                <li>Diverse Gameserver</li>
                            </ul>
                            <Link messageId="route.home" hash="news" className="btn white read-more">Mehr lesen</Link>
                        </div>
                        <div className="card">
                            <h2 className="heading">Neuer Sponsor</h2>
                            <img src={logoTeamspeak} width={200} />
                            <ul>
                                <li>Unübertroffene Sprachqualität</li>
                                <li>Integrierter Datenschutz</li>
                                <li>Sichere Verschlüsselung</li>
                                <li>Erweitertes Rechte-System</li>
                                <li>Interesse? Dann ab zu Teamspeak!</li>
                            </ul>
                            <Link messageId="route.home" hash="news" className="btn white read-more">Mehr lesen</Link>
                        </div>
                        <div className="card">
                            <h2 className="heading">Update Info's</h2>
                            <ul>
                                <li>Bleib immer auf dem neusten Stand!</li>
                                <li>Registriere dich jetzt</li>
                                <li>Und fordere unsere Update-Info an</li>
                                <li>Oder tritt unserem Discord bei</li>
                            </ul>
                            <Link messageId="route.home" hash="news" className="btn white read-more">Mehr lesen</Link>
                        </div>
                    </div>
                </div>

                <div className="scroll-down"><i className="fa fa-chevron-down"/>{formatMessage(messages.scrollDown)}</div>
            </div>
        );
    }
}
export default injectIntl(NewsHomepage);
