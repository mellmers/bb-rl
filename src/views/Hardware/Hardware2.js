import React from "react";
import Helmet from "react-helmet";

import "./Hardware2.css";

export default class Hardware extends React.PureComponent {
    render() {
        return (
            <div class="view full-container Hardware">
                <div class="container">
                    <Helmet><title>Hardware - BattleBulls</title></Helmet>
                    <h1 class="display-4">Hardware</h1>
                    <hr/>
                    <div class="row">
                        <div class="col-md-2.5">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill"
                                   href="#v-pills-home"
                                   role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fas fa-desktop"/>
                                    Home
                                </a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill"
                                   href="#v-pills-profile"
                                   role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="fas fa-desktop"/>
                                    Profile
                                </a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                   href="#v-pills-messages"
                                   role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <i className="fas fa-desktop"/>
                                    Messages
                                </a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                   href="#v-pills-settings"
                                   role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i className="fas fa-server"/>
                                    Settings
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4.5 text-md-center">
                            <div class="row-second" aria-orientation="vertical">
                                <div class="col">
                                    Inhalt 1.1.1.1.1
                                </div>
                                <div className="col">
                                    Inhalt 2
                                </div>
                                <div className="col">
                                    Inhalt 3
                                </div>
                                <div className="col">
                                    Inhalt 4
                                </div>
                                <div className="col">
                                    Inhalt 5
                                </div>
                                <div className="col">
                                    Inhalt 6
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 text-md-center">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">Gehäuse: beQuiet Dark Base Pro 900
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">Mainboard: ASUS Rampage VI Apex
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                     aria-labelledby="v-pills-messages-tab">CPU: Intel Core i9 7900x
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                     aria-labelledby="v-pills-settings-tab">GPU: EVGA Geforce GTX 980 SC AXC 2.0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
