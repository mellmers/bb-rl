import React from 'react';
import messages from "../../i18n/messages";
import {injectIntl} from "react-intl";
import Flip from "react-reveal/Flip";

import Footer from './../Footer/Footer';

import MMOGA_IMG from './img/MMOGA.png';
import Teamspeak_IMG from './img/Teamspeak.png';
import Spreadshirt_IMG from './img/Spreadshirt.png';

import './Partner.css';

class Partner extends React.PureComponent {

    render() {
        const { intl:{formatMessage} } = this.props;
        return (
            <div className="section partner">
                <div className="container">
                    <div className="inner">
                        <h2 className="text-center highlighted-text">{formatMessage(messages.partnerHead)}</h2>

                        <div className="row">
                            <Flip left delay={300}>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <a href="https://www.mmoga.de/?ref=29428" target="_blank" rel="noopener noreferrer" className="partner-card">
                                        <img src={MMOGA_IMG} />
                                        <div className="divider"/>
                                        <ul>
                                            <li>Gamekeys</li>
                                            <li>Faire Preise</li>
                                            <li>Schneller Versand</li>
                                            <li>Riesen Auswahl</li>
                                            <li>Poe Items</li>
                                            <li>Gamescards</li>
                                        </ul>
                                    </a>
                                </div>
                            </Flip>
                            <Flip left delay={800}>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <a href="https://teamspeak.com/?utm_source=sponsor&utm_campaign=battleground-bulls" target="_blank" rel="noopener noreferrer" className="partner-card">
                                        <img src={Teamspeak_IMG} />
                                        <div className="divider"/>
                                        <ul>
                                            <li>Beste Sprachqualität</li>
                                            <li>Minimale CPU Auslastung</li>
                                            <li>Erweitertes Rechtesystem</li>
                                            <li>Offline / LAN-Funktion</li>
                                            <li>Anonyme Nutzung</li>
                                            <li>Spam Frei</li>
                                        </ul>
                                    </a>
                                </div>
                            </Flip>
                            <Flip left delay={1300}>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <a href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer" className="partner-card">
                                        <img src={Spreadshirt_IMG} />
                                        <div className="divider"/>
                                        <ul>
                                            <li>T-Shirt's</li>
                                            <li>Pullover & Hoodies</li>
                                            <li>Tank Tops</li>
                                            <li>Accessoires</li>
                                            <li>Hüllen</li>
                                            <li>Wandbilder</li>
                                            <li>Selber gestalten</li>
                                        </ul>
                                    </a>
                                </div>
                            </Flip>
                        </div>
                    </div>
                </div>

                <div className="scroll-up"><i className="fa fa-chevron-up"/>{formatMessage(messages.goUp)}</div>

                <Footer/>
            </div>
        );
    }
}

export default injectIntl(Partner);
