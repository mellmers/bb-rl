import React from "react";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";
import $ from "jquery";

import "./AdventCalendar.css";
import messages from "../../i18n/messages";

class AdventCalendar extends React.PureComponent {

    componentDidMount() {
        $("main").css("overflow-x", "hidden");
    }

    componentWillUnmount() {
        $("main").css("overflow-x", "unset");
    }

    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div id="advent-calendar" className="view full-container">
                <Helmet>
                    <title>{formatMessage(messages.adventCalendar)} - BattleBulls</title>
                    <script src="/js/advent-calendar.js" async defer />
                </Helmet>

                <div className="calendar-wrap">
                    <div className="calendar">
                        <div className="cube" data-bg-color="#0c283e" data-title="The Escapists"></div>
                        <div className="cube" data-bg-color="#e31d3c" data-title="LEGO Fluch der Karibik"></div>
                        <div className="cube" data-bg-color="#081a29" data-title="Tembo - Badass Elefant"></div>
                        <div className="cube" data-bg-color="#9e1d38" data-title="Murderous Pursuits"></div>
                        <div className="cube" data-bg-color="#0c283e" data-title="Life is Strange EP 1-5"></div>
                        <div className="cube" data-bg-color="#e31d3c" data-title="Tomb Raider"></div>
                        <div className="cube" data-bg-color="#081a29" data-title="Just Cause 3 XXL"></div>
                        <div className="cube" data-bg-color="#9e1d38" data-title="Wizard of Legend"></div>
                        <div className="cube" data-bg-color="#0c283e" data-title="Project CARS 2"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="Metal Gear Solid V"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="The Dwarves"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="Cities Skylines"></div>
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="Darksiders 1+2"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="The Escapists"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="Lego - Star Wars"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="Trackmania 2 Stadium"></div>
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="The Evil Within"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="Tomb Raider"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="Borderlands"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="LEGO - Marvel Heroes 2"></div>
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="Cities Skyline"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="Mega Man Collection"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="Shadow of the TombRaider"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="COD Black Ops 4"></div>
                    </div>
                    <div className="content wrapper">
                        <div className="content__block">
                            <h3 className="content__title">The Escapists</h3>
                            <p className="content__description">The Escapists“ bietet die Gelegenheit, einen heiteren Einblick in das alltägliche Gefängnisleben zu erhalten. Hauptziel aller Häftlinge ist natürlich die Flucht!</p>
                            <p className="content__meta">Gewinner - Justendo</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">LEGO® Pirates of the Caribbean: The Video Game</h3>
                            <p className="content__description">LEGO® Pirates of the Caribbean: The Video Game is an action adventure game that brings the Pirates of the Caribbean world and all its colorful characters to life in LEGO Brick form. Players experience all the memorable scenes from all four films in the humorous and quirky LEGO Video Games style.</p>
                            <p className="content__meta">Gewinner - SDMadNess</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tembo - Badass Elefant</h3>
                            <p className="content__description">In Shell City wurde nach einem verheerenden Angriff der PHANTOM-Streitkräfte der Notstand ausgerufen. Schreckliche Kriegsmaschinen, mit Totenköpfen dekoriert, terrorisieren die Stadt und hinterlassen nichts als Zerstörung! Die Nationalgarde steht den Eindringlingen hilflos gegenüber und deshalb zieht General Krenman im Kampf gegen das Böse seinen letzten Trumpf.</p>
                            <p className="content__meta">Gewinner - v!ruZ</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Murderous Pursuits</h3>
                            <p className="content__description">Murderous Pursuits ist ein Stealth-Spiel für 1 bis 8 Spieler in dem es heißt: töten oder getötet werden! Verfolge clever dein Ziel, in der viktorianischen Zeit Gejagter genannt, um dann zum perfekten Zeitpunkt zuzuschlagen. Doch sei auf der Hut und gib dich den anderen Spielern, die dich jagen, nicht zu erkennen!</p>
                            <p className="content__meta">Gewinner - ExTorIalS</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Life is Strange Episode 1-5</h3>
                            <p className="content__description">Life Is Strange ist ein preisgekröntes und von Kritikern gefeiertes Abenteuerspiel in Episoden, das dem Spieler erlaubt, die Zeit zurückzudrehen und so Vergangenheit, Gegenwart und Zukunft zu beeinflussen.</p>
                            <p className="content__meta">Gewinner - Mrs MadneSS</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tomb Raider</h3>
                            <p className="content__description">Tomb Raider erzählt die aufregende Geschichte von Lara Croft und ihrem Aufstieg zur knallharten Überlebenskünstlerin.</p>
                            <p className="content__meta">Gewinner - Jan</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Just Cause 3 XXL</h3>
                            <p className="content__description">Die Just Cause 3: XXL Edition enthält das von Kritikern gefeierte Spiel Just Cause 3 sowie eine großartige Auswahl zusätzlicher Missionen, explosiver Waffen und Fahrzeuge, die das Spielerlebnis in Medici erweitern. Dies ist die ultimative Version – Neulinge, die sich sofort in Ricos Missionen stürzen wollen, können dies mit einem erweiterten Arsenal und exotischen neuen Fahrzeugen tun.</p>
                            <p className="content__meta">Gewinner - niggo</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Wizard of Legend</h3>
                            <p className="content__description">Wizard of Legend ist ein rasanter Dungeoncrawler mit Schwerpunkt auf dynamischen Magiekämpfen. Wenn du dich schnell bewegst und noch schneller deine Zaubersprüche einsetzt, kannst du sie zu verheerenden Kombos verketten, um deine Gegner zu dezimieren.</p>
                            <p className="content__meta">Gewinner - Trippno</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Project CARS 2</h3>
                            <p className="content__description">Nach dem höchst erfolgreichen Debüt 2015 führt Project CARS 2 die Reihe und ihre Fans in eine fantastische neue Ära des Motorsports und vereint dabei den absolut authentischen Realismus der modernsten Rennsimulation der Welt mit dem puren Spaß spektakulärer Rennaction. Erleben Sie das ultimative Rennfahrererlebnis.</p>
                            <p className="content__meta">Gewinner - yousafe</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Metal Gear Solid V</h3>
                            <p className="content__description">World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?</p>
                            <p className="content__meta">Gewiner - GoLoaT</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">The Dwarves</h3>
                            <p className="content__description">Wenige Helden stehen Hunderten Feinden gegenüber – kannst du das coolste Fantasy-Volk überhaupt zum Sieg gegen die dunklen Horden führen? Erkunde eine riesige Welt, schlage taktische Echtzeitschlachten und erlebe die grandiose Geschichte nach dem Bestseller von Markus Heitz.</p>
                            <p className="content__meta">Gewinner - Atliris</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Cities Skylines</h3>
                            <p className="content__description">Cities: Skylines ist die moderne Version der klassischen Städtebausimulation. Mit neuen Gameplay-Elementen stellt das Spiel Sie vor den Nervenkitzel und die Herausforderung, eine echte Stadt zu errichten und am Laufen zu halten, während es zugleich die bekannte Städtebau-Erfahrung </p>
                            <p className="content__meta">Gewinner - Wird neu verlost!</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Darksiders Franchise - <p>Pack</p></h3>
                            <p className="content__description">Krieg – der erste Reiter der Apokalypse – wurde von den Mächten des Bösen betrogen. Nun wird ihm vorgeworfen, das Ende der Welt vorzeitig ausgelöst zu haben, indem er das heilige Gesetz von Himmel und Hölle gebrochen hat.</p>
                            <p className="content__meta">Gewinner - Marieeeeee</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">The Escapists</h3>
                            <p className="content__description">The Escapists“ bietet die Gelegenheit, einen heiteren Einblick in das alltägliche Gefängnisleben zu erhalten. Hauptziel aller Häftlinge ist natürlich die Flucht!</p>
                            <p className="content__meta">Gewinner - Bl4ck3nd</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Lego - Star Wars</h3>
                            <p className="content__description">Das beste LEGO®-Videospiel-Franchise kehrt triumphal zurück – mit einer witzigen Reise, die auf dem Blockbuster basiert. Das Spiel bietet zudem brandneue Story-Elemente aus dem Star-Wars-Universum aus der Zeit zwischen Star Wars: Die Rückkehr der Jedi-Ritter und Star Wars: Das Imperium schlägt zurück</p>
                            <p className="content__meta">Gewinner - Malachanis</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Trackmania ² Stadium</h3>
                            <p className="content__description">TrackMania2 Stadium markiert das Comeback des von Millionen Spielern geliebten „Stadion“-Settings aus TrackMania Nations Forever. Dieses Mal als Teil der ManiaPlanet-Umgebung, die einen verbesserten Service rund ums Spiel, hochwertige Grafik und einen mächtigen Editor bietet.</p>
                            <p className="content__meta">Gewinner - Showdown</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">The Evil Within</h3>
                            <p className="content__description">The Evil Within ist das neue Projekt aus Shinji Mikami’s Edelschmiede Tango Gameworks. Shinji Mikami ist der Mastermind zahlreicher Klassiker und Erfinder der erfolgreichen Resident Evil-Serie. In bester Survival Horror Tradition führt Sie die Geschichte in eine verstörende Welt die Ihnen den Atem stocken lässt, gespickt mit hinterhältigen Fallen und abscheulichen Vorrichtungen. Im Kampf gegen bestialische Kreaturen, erleben Sie das pure Grauen.</p>
                            <p className="content__meta">Gewinner - Alice</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tomb Raider</h3>
                            <p className="content__description">Tomb Raider erzählt die aufregende Geschichte von Lara Croft und ihrem Aufstieg zur knallharten Überlebenskünstlerin.</p>
                            <p className="content__meta">Gewinner - Fennek112</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Borderlands</h3>
                            <p className="content__description">Lock, Load, & Face the MadnessBereiten Sie sich auf schier unfassbaren Wahnsinn vor! Spielen Sie als einer von vier schießfreudigen Söldnern und erledigen Sie alles, was Ihnen im Weg steht!Mit fesselnder Action bietet dieses FPS-Spiel ein riesiges Waffenarsenal, RPG-Elemente und Koop zu viert*.</p>
                            <p className="content__meta">Gewinner - Private</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">LEGO - Marvel Heroes 2</h3>
                            <p className="content__description">Es ist SOWEIT! Begib dich in LEGO® Marvel Super Heroes 2 zusammen mit deinen Lieblingshelden und -schurken aus verschiedenen Zeitaltern und Realitäten in einem brandneuen, originellen Abenteuer auf die Jagd nach dem zeitreisenden Kang dem Eroberer!</p>
                            <p className="content__meta">Gewinner - Typhonia</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Cities Skylines</h3>
                            <p className="content__description">Cities: Skylines ist die moderne Version der klassischen Städtebausimulation. Mit neuen Gameplay-Elementen stellt das Spiel Sie vor den Nervenkitzel und die Herausforderung, eine echte Stadt zu errichten und am Laufen zu halten, während es zugleich die bekannte Städtebau-Erfahrung</p>
                            <p className="content__meta">Gewinner - </p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Mega Man Collection</h3>
                            <p className="content__description">Die Mega Man Legacy Collection feiert die 8-bit-Geschichte von Capcoms ikonischem Blauen Bomber. Die Legacy Collection enthält Neuauflagen der originalen sechs Mega-Man-Spiele und wird langjährige Fans daran erinnern und Neueinsteigern zeigen, was Mega Man zu einer so beliebten und ikonischen Figur gemacht hat. Die Mega Man Legacy Collection enthält alle sechs Spiele und noch vieles mehr.
                            </p>
                            <p className="content__meta">Gewinner - Justendo</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Shadow of the TombRaider</h3>
                            <p className="content__description">Lara Croft hat nur wenig Zeit, um die Welt vor einer Maya-Apokalypse zu retten. Dabei erfüllt sich ihr Schicksal, und sie wird zum Tomb Raider.</p>
                            <p className="content__meta">Gewinner - Trippno</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Call of Duty Black Ops 4</h3>
                            <p className="content__description">Call of Duty®: Black Ops 4 bietet harte, realistische Mehrspieler-Kämpfe, das größte Zombies-Paket aller Zeiten mit drei vollwertigen Untoten-Abenteuern und Blackout, wo das Black Ops-Universum in einem gewaltigen Battle-Royale-Erlebnis zum Leben erwacht. Black Ops 4 wird das wohl stabilste, ausgefeilteste und modifizierbarste Call of Duty® für PC aller Zeiten werden.</p>
                            <p className="content__meta">Gewinner - Riptrg</p>
                        </div>
                        <div className="content__number">0</div>
                        <button className="btn white btn-back">&crarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default (injectIntl(AdventCalendar));
