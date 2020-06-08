import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import moment from "moment";
// import SnowStorm from "react-snowstorm";
import ReactGA from 'react-ga';

// i18n - Translations
import {IntlProvider, addLocaleData} from "react-intl";
import deLocaleData from "react-intl/locale-data/de";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./i18n/locales";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Home from "./views/Home/Home";
import Imprint from "./views/Imprint/Imprint";
import Login from "./views/Login/Login";
import Registration from "./views/Registration/Registration";
import NotFound from "./views/NotFound/NotFound";
import Privacy from "./views/Privacy/Privacy";
import RocketLeagueOverlay from "./views/RocketLeagueOverlay/RocketLeagueOverlay";
import StreamTimes from "./views/StreamTimes/StreamTimes";
import TournamentList from "./views/TournamentList/TournamentList";
import Admin from "./views/Admin/Admin";
import Bulls from "./views/Bulls/Bulls";
import TournamentRegistration from "./views/TournamentRegistration/TournamentRegistration";
import Contact from "./views/Contact/Contact";
import Calendar from "./views/Calendar/Calendar";
import Profile from "./views/Profile/Profile";
import MyProfile from "./views/MyProfile/MyProfile";
import Commands from "./views/Commands/Commands";
// import News from "./views/News/News";
// import NewsDetail from "./views/NewsDetail/NewsDetail";
// import Scum from "./views/Scum/Scum";
// import AdventCalendar from "./views/AdventCalendar/AdventCalendar";
import GAOptOut from "./views/GAOptOut/GAOptOut";

import {setLanguage} from "./actions/ApplicationActions";
import {GOOGLE_ANALYTICS_TRACKING_ID, COOKIE_COOKIECONSENT_STATUS, COOKIE_OPT_OUT} from "./constants";

import requireAuthentication from "./utils/AuthComponent";
import withTracker from "./utils/TrackingComponent";

import {DEFAULT_LANG, SUPPORTED_LANG} from "./i18n/supportedLanguages";

import "./App.css";

// i18n - Translations
addLocaleData(deLocaleData);
addLocaleData(enLocaleData);

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        moment.locale(props.currentLanguage);

        const localeFromUrl = this.getLocaleFromUrl();
        // Set application language if it differ from language from url (requested url)
        if (localeFromUrl !== props.currentLanguage) {
            // If language from url not supported set default language
            if (SUPPORTED_LANG.concat(DEFAULT_LANG).indexOf(localeFromUrl) === -1) {
                window.history.pushState({}, "", window.location.origin + "/" + DEFAULT_LANG + "/" + window.location.search + window.location.hash);
                props.dispatch(setLanguage(DEFAULT_LANG));
            } else {
                props.dispatch(setLanguage(localeFromUrl));
            }
        }
    }

    componentDidMount() {
        this.onCookieStatusChange = this.onCookieStatusChange.bind(this);
        this.initReactGA = this.initReactGA.bind(this);

        const messages = translations[this.getLocaleFromUrl()];
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "rgba(8, 26, 41, 0.9)",
                    "text": "#fff"
                },
                "button": {
                    "background": "transparent",
                    "text": "#e31d3c",
                    "border": "#e31d3c"
                }
            },
            "position": "bottom-left",
            "type": "opt-out",
            "content": {
                "message": messages["cookie.message"],
                "dismiss": messages["cookie.dismiss"],
                "deny": messages["cookie.deny"],
                "allow": messages["cookie.allow"],
                "link": messages["cookie.link"],
                "policy": messages["cookie.policy"],
                "href": messages["route.privacy"],
                "target": "_blank"
            },
            onStatusChange: this.onCookieStatusChange
        });

        this.initReactGA();
    }

    componentWillUpdate(nextProps, nextState) {
        const localeFromUrl = this.getLocaleFromUrl();
        if (nextProps.currentLanguage !== localeFromUrl) {
            moment.locale(nextProps.currentLanguage);
            window.history.pushState({}, "", window.location.origin + "/" + nextProps.currentLanguage + "/" /* + window.location.search + window.location.hash */);
        }
    }

    buildLocalizedPath(url) {
        return "/" + this.getLocaleFromUrl() + url;
    }

    getLocaleFromUrl() {
        return window.location.pathname.split("/")[1];
    }

    initReactGA() {
        if (process.env.REACT_APP_DEVELOPMENT !== "true") {
            ReactGA.initialize({
                trackingId: GOOGLE_ANALYTICS_TRACKING_ID,
                debug: true,
                gaOptions: {
                    cookieDomain: "none"
                }
            });
            ReactGA.pageview(document.location.pathname);

            // Anonymize IP
            if (document.cookie.indexOf(COOKIE_COOKIECONSENT_STATUS + "=deny") > -1 || document.cookie.indexOf(COOKIE_OPT_OUT + "=true") > -1) {
                ReactGA.set({anonymizeIp: true});
            }
        }
    }

    onCookieStatusChange(status, chosenBefore) {
        console.log(this,status,chosenBefore);
        this.initReactGA();
    }

    render() {
        const locale = this.props.currentLanguage;
        const messages = translations[locale];
        return (
            <IntlProvider locale={locale} key={locale} messages={messages}>
                <BrowserRouter>
                    <div id="app">
                        <Helmet htmlAttributes={{"lang": locale}}/>
                        <Header/>
                        {/*<SnowStorm*/}
                            {/*excludeMobile={false}*/}
                            {/*flakesMax={256}*/}
                            {/*flakesMaxActive={128}*/}
                        {/*/>*/}
                        <main>
                            <Switch>
                                <Route path={messages["route.home"]} component={withTracker(Home)} exact/>
                                <Route path={messages["route.admin"]} component={requireAuthentication(Admin, "admin")} exact/>
                                <Route path={messages["route.privacy"]} component={withTracker(Privacy)} exact/>
                                <Route path={messages["route.imprint"]} component={withTracker(Imprint)} exact/>
                                <Route path={messages["route.login"]} component={withTracker(Login)} exact/>
                                <Route path={messages["route.register"]} component={withTracker(Registration)} exact/>
                                <Route path={messages["route.rlOverlay"]} component={withTracker(RocketLeagueOverlay)} exact/>
                                <Route path={messages["route.schedule"]} component={withTracker(StreamTimes)} exact/>
                                <Route path={messages["route.tournament"]} component={withTracker(requireAuthentication(TournamentList))} exact/>
                                <Route path={messages["route.bulls"]} component={withTracker(Bulls)} exact/>
                                <Route path={messages["route.tournamentRegistration"]} component={withTracker(TournamentRegistration)} exact/>
                                <Route path={messages["route.contact"]} component={withTracker(Contact)} exact/>
                                <Route path={messages["route.calendar"]} component={withTracker(requireAuthentication(Calendar))} exact/>
                                <Route path={messages["route.profile"]} component={withTracker(Profile)}/>
                                <Route path={messages["route.myProfile"]} component={withTracker(requireAuthentication(MyProfile))} exact/>
                                <Route path={messages["route.commands"]} component={withTracker(Commands)} exact/>
                                {/*
                                <Route path={messages["route.news"]} component={News} exact/>
                                <Route path={messages["route.newsDetail"]} component={NewsDetail} exact/>
                                */}
                                {/*<Route path={messages["route.scum"]} component={withTracker(Scum)} exact/>*/}
                                <Route path={messages["route.gaOptOut"]} component={withTracker(GAOptOut)} exact/>
                                {/*<Route path={messages["route.adventCalendar"]} component={withTracker(AdventCalendar)} exact/>*/}
                                <Route component={withTracker(NotFound)} exact/>
                            </Switch>
                        </main>
                        <Footer/>
                        <Modal />
                    </div>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        currentLanguage: state.application.language
    };
}
export default connect(mapStateToProps)(App);
