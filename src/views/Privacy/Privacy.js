import React from 'react';
import {Helmet} from "react-helmet";

import {EMAIL_BUSINESS} from "../../constants";

import './Privacy.css';

export default class Privacy extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container privacy">
                <Helmet><title>Datenschutz - BattleBulls</title></Helmet>
                <h1>Datenschutz</h1>
                <div className="row">
                    <div className="col-12">
                        <h2>1. Datenschutz auf einen Blick</h2>

                        <h3>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                            Datenschutzerklärung.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3>Datenerfassung auf unserer Website</h3>

                        <h5>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h5>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <h5>Wie erfassen wir Ihre Daten?</h5>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p>
                            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                            sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                            Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
                            betreten.
                        </p>

                        <h5>Wofür nutzen wir Ihre Daten?</h5>
                        <p>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>

                        <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
                        <p>
                            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
                            Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
                            Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                            Aufsichtsbehörde zu.
                            Analyse-Tools und Tools von Drittanbietern
                        </p>
                        <p>
                            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
                            geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres
                            Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
                            zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die
                            Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in
                            der folgenden Datenschutzerklärung.
                        </p>
                        <p>
                            Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie
                            in dieser Datenschutzerklärung informieren.

                        </p>

                        <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p>
                            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                            vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                            nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p>
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per
                            E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                            durch Dritte ist nicht möglich.
                            Hinweis zur verantwortlichen Stelle
                        </p>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/>
                            <br/>
                            Malthe Strauch <br/>
                            Herrenkamp 21 <br/>
                            27299 Langwedel <br/>
                            <a href={"mailto:" + EMAIL_BUSINESS}>{EMAIL_BUSINESS}</a>
                        </p>
                        <p>
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                            mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                            Namen, E-Mail-Adressen o. Ä.) entscheidet.
                            Widerruf Ihrer Einwilligung zur Datenverarbeitung
                        </p>
                        <p>
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                            können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                            Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                            Datenverarbeitung bleibt vom Widerruf unberührt.
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde
                        </p>
                        <p>
                            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der
                            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen
                            Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen
                            seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können
                            folgendem Link entnommen werden: <a
                            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                            target="_blank"
                            rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                        </p>

                        <h3>Recht auf Datenübertragbarkeit</h3>
                        <p>
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                            Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                            maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
                            an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
                            ist.
                        </p>

                        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                        <p>
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                            Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                            senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                            daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem
                            Schloss-Symbol in Ihrer Browserzeile.
                        </p>
                        <p>
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                            übermitteln, nicht von Dritten mitgelesen werden.
                        </p>

                        <h3>Auskunft, Sperrung, Löschung</h3>
                        <p>
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
                            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                            können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                            Widerspruch gegen Werbe-Mails
                        </p>
                        <p>
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
                            hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                            Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
                            Spam-E-Mails, vor.
                        </p>

                        <h2>3. Datenerfassung auf unserer Website</h2>

                        <h3>Cookies</h3>
                        <p>
                            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem
                            Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot
                            nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die
                            auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                        </p>
                        <p>
                            Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden
                            nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                            gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
                            nächsten Besuch wiederzuerkennen.
                        </p>
                        <p>
                            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                            werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle
                            oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des
                            Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website
                            eingeschränkt sein.
                        </p>
                        <p>
                            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur
                            Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion)
                            erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
                            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
                            fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B.
                            Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser
                            Datenschutzerklärung gesondert behandelt.
                        </p>

                        <h3>Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                            nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p>
                            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich
                            auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
                            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
                            Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
                            unberührt.
                        </p>
                        <p>
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                            Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                            gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>

                    </div>
                    <div className="col-12 col-md-6">
                        <h3>Registrierung auf dieser Website</h3>
                        <p>
                            Sie können sich auf unserer Website registrieren, um zusätzliche Funktionen auf der Seite zu
                            nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen
                            Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung
                            abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die
                            Registrierung ablehnen.
                        </p>
                        <p>
                            Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen
                            nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu
                            informieren.
                        </p>
                        <p>
                            Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer
                            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung
                            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
                            Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>
                        <p>
                            Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf
                            unserer Website registriert sind und werden anschließend gelöscht. Gesetzliche
                            Aufbewahrungsfristen bleiben unberührt.
                        </p>

                        <h2>Soziale Medien</h2>

                        <h3>Facebook-Plugins (Like & Share-Button)</h3>
                        <p>
                            Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1
                            Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie
                            an dem Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine
                            Übersicht über die Facebook-Plugins finden Sie hier: <a
                            href="https://developers.facebook.com/docs/plugins/"
                            target="_blank"
                            rel="noopener noreferrer">https://developers.facebook.com/docs/plugins/</a>.
                        </p>
                        <p>
                            Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem
                            Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass
                            Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button"
                            anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte
                            unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer
                            Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten
                            keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook
                            erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook
                            unter: <a href="https://de-de.facebook.com/policy.php"
                                      target="_blank"
                                      rel="noopener noreferrer">https://de-de.facebook.com/policy.php</a>.
                        </p>
                        <p>
                            Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto
                            zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
                        </p>

                        <h2>5. Analyse Tools und Werbung</h2>

                        <h3>Google Analytics</h3>
                        <p>
                            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
                            Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                        </p>
                        <p>
                            Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem
                            Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
                            ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website
                            werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                        </p>
                        <p>
                            Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                            DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
                            Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
                        </p>

                        <h3>IP Anonymisierung</h3>
                        <p>
                            Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre
                            IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in
                            die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
                            in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google
                            diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
                            Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der
                            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die
                            im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
                            anderen Daten von Google zusammengeführt.
                        </p>

                        <h3>Browser Plugin</h3>
                        <p>
                            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                            Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                            gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen
                            können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre
                            Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
                            Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link
                            verfügbare Browser-Plugin herunterladen und installieren: <a
                            href="https://tools.google.com/dlpage/gaoptout?hl=de"
                            target="_blank"
                            rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
                        </p>

                        <h3>Widerspruch gegen Datenerfassung</h3>
                        <p>
                            Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf
                            folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten
                            bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren.
                        </p>
                        <p>
                            Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
                            Datenschutzerklärung von Google: <a
                            href="https://support.google.com/analytics/answer/6004245?hl=de"
                            target="_blank"
                            rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.
                        </p>

                        <h3>Auftragsdatenverarbeitung</h3>
                        <p>
                            Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen
                            die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics
                            vollständig um.
                        </p>

                        <h3>Demografische Merkmale bei Google Analytics</h3>
                        <p>
                            Diese Website nutzt die Funktion “demografische Merkmale” von Google Analytics. Dadurch
                            können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der
                            Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google
                            sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person
                            zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in
                            Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im
                            Punkt “Widerspruch gegen Datenerfassung” dargestellt generell untersagen.
                        </p>

                        <h2>6. Plugins und Tools</h2>

                        <h3>YouTube</h3>
                        <p>
                            Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten
                            ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
                        </p>
                        <p>
                            Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine
                            Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt,
                            welche unserer Seiten Sie besucht haben.
                        </p>
                        <p>
                            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr
                            Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem
                            Sie sich aus Ihrem YouTube-Account ausloggen.
                        </p>
                        <p>
                            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer
                            Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                            DSGVO dar.
                        </p>
                        <p>
                            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                            YouTube unter: <a
                            href="https://www.google.de/intl/de/policies/privacy"
                            target="_blank"
                            rel="noopener noreferrer">https://www.google.de/intl/de/policies/privacy</a>.
                        </p>

                        <h3>Vimeo</h3>
                        <p>
                            Unsere Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West
                            18th Street, New York, New York 10011, USA.
                        </p>
                        <p>
                            Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten besuchen, wird eine
                            Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem Vimeo-Server mitgeteilt,
                            welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch
                            dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die
                            von Vimeo erfassten Informationen werden an den Vimeo-Server in den USA übermittelt.
                        </p>
                        <p>
                            Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten
                            direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus
                            Ihrem Vimeo-Account ausloggen.
                        </p>
                        <p>
                            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                            Vimeo unter: <a
                            href="https://vimeo.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer">https://vimeo.com/privacy</a>.
                        </p>

                        <h3>Google Web Fonts</h3>
                        <p>
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die
                            von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten
                            Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                        </p>
                        <p>
                            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google
                            aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere
                            Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer
                            einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein
                            berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                        </p>
                        <p>
                            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer
                            genutzt.
                        </p>
                        <p>
                            Weitere Informationen zu Google Web Fonts finden Sie unter <a
                            href="https://developers.google.com/fonts/faq"
                            target="_blank"
                            rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der
                            Datenschutzerklärung von Google: <a
                            href="https://www.google.com/policies/privacy/"
                            target="_blank"
                            rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
