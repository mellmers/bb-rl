import React, {PureComponent} from "react";
import classnames from "classnames";
import Helmet from "react-helmet";
import {injectIntl} from "react-intl";
import Slider from "react-slick";
import $ from "jquery";
import Zoom from 'react-reveal/Zoom';

import About from "../../components/About/About";
import Counter from "../../components/Counter/Counter";
import Link from "../../components/Link/Link";
import NewsHomepage from "../../components/NewsHomepage/NewsHomepage";
import Partner from "../../components/Partner/Partner";
import Rules from "../../components/Rules/Rules";

import API from "../../utils/API";

import messages from "../../i18n/messages";

import "./Home.css";

import logoSchriftzug from "./../../images/logo-schriftzug_600px.png";

import slideImage1 from "./img/slider/rocket-league-hd-wallpapers.jpg";
import slideImage2 from "./img/slider/wallpaper_star_citizen_72_1920x1080.jpg";
import slideImage3 from "./img/slider/wallpaper_vampire_the_masquerade_-_bloodlines_2_01_1920x1080.png";
import slideImage4 from "./img/slider/wallpaper_kingpin_reloaded_01_1920x1080.jpg";
import slideImage5 from "./img/slider/wallpaper_unreal_engine_5_01_1920x1080.png";
import slideImage6 from "./img/slider/wallpaper_tom_clancys_the_division_2_1920x1080.jpg";
import slideImage7 from "./img/slider/battlefield-v.jpg";
import slideImage8 from "./img/slider/dark-siders-wallpapers-1920x1080.jpg";
import slideImage9 from "./img/slider/the-division-2-hd-wallpaper.jpg";

import Partner_MMOGA from './img/partner/MMOGA.png';
import Partner_MMOGA_Hightlight from './img/partner/MMOGA-Highlight.png';
import Partner_Runtime from './img/partner/Runtime.png';
import Partner_Runtime_Hightlight from './img/partner/Runtime-Highlight.png';
import Partner_Spreadshirt from './img/partner/Spreadshirt.png';
import Partner_Spreadshirt_Hightlight from './img/partner/Spreadshirt-Highlight.png';
import Partner_Teamspeak from './img/partner/Teamspeak.png';
import Partner_Teamspeak_Highlight from './img/partner/Teamspeak-Highlight.png';
import Partner_GameWallpaper from './img/partner/GameWallpaper.png';
import Partner_GameWallpaper_Highlight from './img/partner/GameWallpaper-Highlight.png';

export class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            streamIsLive: false,
            showRegistrationBtn: true,
            showTournamentInfo: true,
            Twitch: null
        };
    }

    componentDidMount() {
        this.resizeTwitchPlayer = this.resizeTwitchPlayer.bind(this);

        window.scrollTo(0, 0);

        $(this.refs.fullpage).fullpage({
            anchors: ["start", "news", "bulls", "regeln", "partner"],
            scrollOverflow: true
        });

        $(".scroll-down").on("click", function () {
            $.fn.fullpage.moveSectionDown();
        });
        $(".scroll-up").on("click", function () {
            $.fn.fullpage.moveTo(1);
        });

        $(window).resize(() => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.resizeTwitchPlayer();
            }, 250);
        });

        $(this.refs.fullpage).find(".partner .image").each(function() {
            const el = $(this);
            el.css("background-image", $(this).data("src"));
            el.on("mouseover", function () {
                el.css("background-image", $(this).data("src-hover"));
            });
        });

        this.openStream = this.openStream.bind(this);

        this.checkIfTwitchLoaded = this.checkIfTwitchLoaded.bind(this);
        this.checkIfTwitchLoaded();

        this.checkBBStreamIsOnline = this.checkBBStreamIsOnline.bind(this);
        this.checkBBStreamIsOnline();
        setInterval(this.checkBBStreamIsOnline, 60000);
    }

    componentDidUpdate(prevProps, prevState) {
        let currentPath = this.props.location.pathname + this.props.location.hash;
        if (currentPath !== prevProps.location.pathname + prevProps.location.hash) {
            const splittedPath = currentPath.split("/");
            let moveTo = "start";
            splittedPath.forEach( path => {
                if (path.indexOf("#") > -1) {
                    moveTo = path.replace("#", "");
                }
            });
            $.fn.fullpage.moveTo(moveTo);
        }
    }

    componentWillUnmount() {
        $.fn.fullpage.destroy("all");
        $(".scroll-down, .scroll-up").off();
    }

    checkBBStreamIsOnline () {
        // Request stream and look if stream is online
        API.getInstance()._fetch("https://api.twitch.tv/helix/streams?user_login=battleground_bulls", "GET", null, null, {"Client-ID": "swviygtzpvpvtpm5r79410wd6221th"}).then(json => {
            let live = false;
            if (json.data && json.data.length > 0) {
                live = true;
                // console.log(json.data[0].started_at);
                // Wir könnten "started_at" verwenden, um anzuzeigen wie lange der Kanal schon online ist - json.data[0].started_at
            }
            if (live !== this.state.streamIsLive) {
                this.setState({ streamIsLive: live });
            }
        });
    }

    checkIfTwitchLoaded() {
        clearTimeout(this.checkTwitchTimeout);

        if (typeof window.Twitch === "undefined") {
            this.checkTwitchTimeout = setTimeout(this.checkIfTwitchLoaded, 500);
        } else {
            this.setState({ Twitch: window.Twitch});
        }
    }

    openStream(stream) {
        let { Twitch } = this.state;
        if (Twitch) {
            switch (stream) {
                case "bp":
                    new Twitch.Embed("twitch-embed-bp", {
                        autoplay: true,
                        layout: "video-with-chat",
                        width: 3000,
                        channel: "bulls_playground"
                    });
                    $(this.refs.fullpage).find("#twitch-embed-bp").delay(1000).fadeIn();
                    break;
                default:
                    new Twitch.Embed("twitch-embed-bb", {
                        autoplay: true,
                        layout: "video-with-chat",
                        width: 3000,
                        channel: "battleground_bulls"
                    });
                    $(this.refs.fullpage).find("#twitch-embed-bb").delay(1000).fadeIn();
                    break;
            }
            setTimeout(this.resizeTwitchPlayer, 1000);
        }
    }

    resizeTwitchPlayer() {
        let player = $("#twitch-embed-bb iframe, #twitch-embed-bp iframe");
        if (player.length > 0) {
            player.css({
                height: player.width() / 16 * 9 - $("nav.navbar").height(),
                maxHeight: player.closest(".full-container").height()
            });
        }
    }

    render() {
        let { streamIsLive } = this.state;
        let liveButton = null,
            logo = <img src={logoSchriftzug} className="logo" alt="Battleground Bulls"/>;
        if (streamIsLive) {
            liveButton = <div className="live-btn" onClick={this.openStream.bind(this, "bb")}><div className="record"/>Jetzt live</div>;
            logo = <img src={logoSchriftzug} className="logo" alt="Battleground Bulls" onClick={this.openStream.bind(this, "bb")}/>;
        }
        const {intl:{formatMessage}} = this.props;

        const sliderSettings = {
            arrows: false,
            className: "default",
            dots: true,
            infinite: true,
            fade: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000
        };
        const sliderImages = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5, slideImage6, slideImage7, slideImage8, slideImage9];

        return (
            <div ref="fullpage" className="container-fluid home">
                <Helmet>
                    <title>Home - Battleground-Bulls</title>
                    <script src="https://embed.twitch.tv/embed/v1.js" async defer />
                </Helmet>

                <div className={classnames("fullpage-inner-wrapper", {"live": (streamIsLive)})}>

                    <div className="section start">

                        <div className="placeholder">
                            <div id="twitch-embed-bb" />

                            <div className="slider">

                                <div className="overlay"/>

                                <Zoom top delay={300} duration={2000}>
                                    <div className="logo-wrapper" data-toggle="tooltip" data-placement="right" title="Zum Live-Stream" data-original-title="Zum Live-Stream">
                                        {liveButton}
                                        {logo}
                                    </div>
                                </Zoom>

                                <Slider {...sliderSettings} >
                                    {sliderImages.map( (img, index) => {
                                        // return <div key={index}><img src={img}/></div>;
                                        return <div key={index} className="slide-content"><div className="slide-image" style={{backgroundImage: `url(${img})`}}/></div>
                                    })}
                                </Slider>
                            </div>
                        </div>

                        <div className="container-fluid partner">
                            <a className="image-wrapper" href="https://www.mmoga.de/?ref=29428" target="_blank" rel="noopener noreferrer">
                                <img src={Partner_MMOGA} alt="MMOGA" />
                                <img className="highlight" src={Partner_MMOGA_Hightlight} alt="MMOGA" />
                            </a>
                            <a className="image-wrapper" href="https://runtime.idevaffiliate.com/780-1-3-2.html" target="_blank" rel="noopener noreferrer">
                                <img src={Partner_Runtime} alt="Runtime" />
                                <img className="highlight" src={Partner_Runtime_Hightlight} alt="Runtime" />
                            </a>
                            <div className={classnames("tournament-info", {"d-none": !this.state.showTournamentInfo})}>
                                <Counter endDate="March 3, 2019 15:15:00" endCallback={() => { this.setState({showRegistrationBtn: false, showTournamentInfo: false}) }} />
                                <div className="links">
                                    {this.state.showRegistrationBtn ? <Link messageId="route.tournamentRegistration" params={{teams: "2vs2"}} className="btn primary">{formatMessage(messages.signUpNow)}</Link> : null}
                                    {/*<Link messageId="route.adventCalendar" className="btn primary">{formatMessage(messages.adventCalendar)}</Link>*/}
                                    {/*<Link messageId="route.schedule" className="btn primary">{formatMessage(messages.streamSchedule)}</Link>*/}
                                    {/*<a href="https://discord.gg/gke2aYp" className="btn discord" target="_blank" rel="noopener noreferrer">Join Discord</a>*/}
                                </div>
                            </div>
                            <a className="image-wrapper" href="https://teamspeak.com/?utm_source=sponsor&utm_campaign=battleground-bulls" target="_blank" rel="noopener noreferrer">
                                <img src={Partner_Teamspeak} alt="Teamspeak" />
                                <img className="highlight" src={Partner_Teamspeak_Highlight} alt="Teamspeak" />
                            </a>
                            <a className="image-wrapper" href="https://www.gamewallpapers.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Partner_GameWallpaper} alt="GameWallpaper" />
                                <img className="highlight" src={Partner_GameWallpaper_Highlight} alt="GameWallpaper" />
                            </a>
                            <a className="image-wrapper" href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer">
                                <img src={Partner_Spreadshirt} alt="Spreadshirt" />
                                <img className="highlight" src={Partner_Spreadshirt_Hightlight} alt="Spreadshirt" />
                            </a>
                        </div>
                    </div>

                    <NewsHomepage/>

                    <About/>

                    <Rules/>

                    <Partner/>

                </div>
            </div>
        );
    }
}
export default injectIntl(Home);
