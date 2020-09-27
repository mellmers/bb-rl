import React from "react";
import Helmet from "react-helmet";

import "./Hardware.css";

export default class Hardware extends React.PureComponent {

    render() {
        return (

            <div id="hardware" className="view full-container hardware">
                <Helmet><title>Hardware - BattleBulls</title></Helmet>
                <div className="container">
                    <h1>Hardware</h1>

                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a href="#m4kar0ny" className="nav-link" data-toggle="collapse"
                                                    role="button" aria-expanded="false"
                                                    aria-controls="m4kar0ny">m4kar0ny</a></li>
                        <li className="nav-item"><a href="#xPainHunt3r" className="nav-link collapsed"
                                                    data-toggle="collapse" role="button" aria-expanded="false"
                                                    aria-controls="xPainHunt3r">xPainHunt3r</a></li>
                        <li className="nav-item"><a href="#streampc" className="nav-link collapsed"
                                                    data-toggle="collapse" role="button" aria-expanded="false"
                                                    aria-controls="streampc">Stream-PC's</a></li>
                    </ul>

                    <div id="m4kar0ny" className="collapse show" data-parent="#hardware">
                        <h5>Hardware m4kar0ny</h5>
                        <ul>
                            <li>
                                <div className="hardware">Gehäuse</div>
                                <div className="description">N/A</div>
                            </li>
                            <li>
                                <div className="hardware">Mainboard</div>
                                <div className="description">ASUS ROG Maximus Hero X</div>
                            </li>
                            <li>
                                <div className="hardware">CPU</div>
                                <div className="description">Intel Core i7 8700k</div>
                            </li>
                            <li>
                                <div className="hardware">CPU-Kühler</div>
                                <div className="description">N/A</div>
                            </li>
                            <li>
                                <div className="hardware">RAM</div>
                                <div className="description">N/A</div>
                            </li>
                            <li>
                                <div className="hardware">GPU</div>
                                <div className="description">Geforce GTX 1080 Ti</div>
                            </li>
                            <li>
                                <div className="hardware">Festplatten</div>
                                <div className="description">Mehrere</div>
                            </li>
                            <li>
                                <div className="hardware">Steckkarten</div>
                                <div className="description">N/A</div>
                            </li>
                            <li>
                                <div className="hardware">Netzteil</div>
                                <div className="description">N/A</div>
                            </li>

                        </ul>
                    </div>
                    <div id="xPainHunt3r" className="collapse" data-parent="#hardware">
                        <h5>Hardware xPainHunt3r</h5>
                        <ul>
                            <li>
                                <div className="hardware">Gehäuse</div>
                                <div className="description">beQuiet Dark Base Pro 900</div>
                            </li>
                            <li>
                                <div className="hardware">Mainboard</div>
                                <div className="description">MSI x299 xPower Gaming AC</div>
                            </li>
                            <li>
                                <div className="hardware">CPU</div>
                                <div className="description">Intel Core i9 7900x 10 Kerne / 20 Threads</div>
                            </li>
                            <li>
                                <div className="hardware">CPU-Kühler</div>
                                <div className="description">Corsair H100 v2 Wasserkühlung Custom (2x beQuiet Silent
                                    Wing 3 Lüfter)
                                </div>
                            </li>
                            <li>
                                <div className="hardware">RAM</div>
                                <div className="description">Corsair 32GB Vengeance RBG DDR4 3000 MHz</div>
                            </li>
                            <li>
                                <div className="hardware">GPU</div>
                                <div className="description">EVGA Geforce GTX 980 SC AXC2.0 4GB Ram</div>
                            </li>
                            <li>
                                <div className="hardware">Festplatten</div>
                                <div className="description">Seagate Barracuda 4TB</div>
                            </li>
                            <li>
                                <div className="hardware">SSD Festplatten</div>
                                <div className="description">Crucical 512GB | M2 Samsung 960 EVO 256 GB</div>
                            </li>
                            <li>
                                <div className="hardware">Steckkarten</div>
                                <div className="description">Creative Sound Blaster Z</div>
                            </li>
                            <li>
                                <div className="hardware">Netzteil</div>
                                <div className="description">beQuiet Dark Power 750W</div>
                            </li>

                        </ul>
                    </div>
                    <div id="streampc" className="collapse" data-parent="#hardware">
                        <h5>Hardware Stream PC's</h5>
                        <h6>xPainHunt3r</h6>
                        <ul>
                            <li>
                                <div className="hardware">Gehäuse</div>
                                <div className="description">N/A</div>
                            </li>
                            <li>
                                <div className="hardware">Mainboard</div>
                                <div className="description">MSI G45 Gaming</div>
                            </li>
                            <li>
                                <div className="hardware">CPU</div>
                                <div className="description">Intel Core i7 4770k 4 Kerne / 8 Threads</div>
                            </li>
                            <li>
                                <div className="hardware">CPU-Kühler</div>
                                <div className="description">beQuiet Dark Rock Pro</div>
                            </li>
                            <li>
                                <div className="hardware">RAM</div>
                                <div className="description">Kingston 16GB HyperX DDR3 2666 MHz</div>
                            </li>
                            <li>
                                <div className="hardware">GPU</div>
                                <div className="description">Zotac Geforce GTX 1050 Ti Amp!</div>
                            </li>
                            <li>
                                <div className="hardware">Festplatten</div>
                                <div className="description">Seagate Barracuda 2TB</div>
                            </li>
                            <li>
                                <div className="hardware">SSD Festplatten</div>
                                <div className="description">Samsung 560 EVO 512 GB</div>
                            </li>
                            <li>
                                <div className="hardware">Steckkarten</div>
                                <div className="description">OnBoard</div>
                            </li>
                            <li>
                                <div className="hardware">Netzteil</div>
                                <div className="description">beQuiet Dark Power 750W</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
