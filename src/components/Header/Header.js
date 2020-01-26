import React from "react";
import {injectIntl} from "react-intl";
import {withRouter} from "react-router-dom";
import classnames from "classnames";
import {connect} from "react-redux";
import $ from "jquery";

import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import Link from "../../components/Link/Link";

import {logout} from "../../actions/ApplicationActions";
import messages from "../../i18n/messages";

import "./Header.css";

import logo from "./../../images/logo_100px.png";

class Header extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            active: props.location.pathname + props.location.hash,
            userSidebarOpen: false
        };

        this.hideSidebar = this.hideSidebar.bind(this);
        this.setUserSidebarWidth = this.setUserSidebarWidth.bind(this);
        this.toggleUserSidebar = this.toggleUserSidebar.bind(this);
    }

    componentWillMount() {
        this.props.history.listen(route => {
            this.setState({
                active: route.pathname + route.hash
            });
        });
    }

    componentDidMount() {
        $(".nav-item")
            .on("mouseenter", function () {
                $(this).find("ul.submenu").slideDown(200);
            })
            .on("mouseleave", function () {
                $(this).find("ul.submenu").slideUp(200);
            });

        let timeout;
        let throttle = 500;
        $(window).resize(() => {
            if (this.state.userSidebarOpen && !timeout) {
                timeout = setTimeout(() => {
                    this.setUserSidebarWidth();
                    timeout = null;
                }, throttle);
            }
        });
        $(this.refs.backdrop).on("click", this.hideSidebar);
        $(".navbar-brand, .navbar-nav:not(.sign-in), .sidebar-wrapper li").on("click", this.hideSidebar);

        this.deactivateImgContextMenu();
    }

    componentDidUpdate() {
        this.deactivateImgContextMenu();
    }

    componentWillUnmount() {
        $(".nav-item").off();
        $(this.refs.backdrop).off();
        $(".navbar-brand, .navbar-nav:not(.sign-in), .sidebar-wrapper li").off();
    }

    deactivateImgContextMenu() {
        $("img").contextmenu(function (e) {
            e.preventDefault();
            return false;
        });
    }

    hideSidebar() {
        $(this.refs.sidebar).width(0);
        $("body").removeClass("no-scroll");
        this.setState({userSidebarOpen: false});
    }

    setUserSidebarWidth() {
        let sideBar = $(this.refs.sidebar),
            navSignIn = $(this.refs.navSignIn);
        sideBar.width($(window).width() - navSignIn.offset().left);
    }

    toggleUserSidebar() {
        let userSidebarOpen = this.state.userSidebarOpen,
            sideBar = $(this.refs.sidebar),
            navSignIn = $(this.refs.navSignIn),
            body = $("body");
        if (userSidebarOpen) {
            sideBar.width(0);
            body.removeClass("no-scroll");
        } else {
            sideBar.width($(window).width() - navSignIn.offset().left);
            body.addClass("no-scroll");
        }
        this.setState({userSidebarOpen: !userSidebarOpen});
    }

    render() {
        let {active, userSidebarOpen} = this.state;
        let {user} = this.props;
        const {intl:{formatMessage}} = this.props;
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link messageId="route.home" hash="start" className="navbar-brand"><img src={logo} alt="BattleBulls"/></Link>
                        <div className="navbar-toggler collapsed" data-toggle="collapse"
                             data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                             aria-label="Toggle navigation">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mr-auto default">
                                <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.home"]) || active === formatMessage(messages["route.home"]) + "/#start"})}>
                                    <Link messageId="route.home" hash="start" className="nav-link">{formatMessage(messages.home)}</Link>
                                </li>
                                <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.home"]) + "/#news"})}>
                                    <Link messageId="route.home" hash="news" className="nav-link">{formatMessage(messages.news)}</Link>
                                </li>
                                {/**
                                 <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.scum"])})}>
                                    <Link messageId="route.scum" className="nav-link">Scum</Link>
                                </li>
                                 **/}
                                <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.home"]) + "/#bulls"})}>
                                    <Link messageId="route.home" hash="bulls" className="nav-link">{formatMessage(messages.aboutBulls)}</Link>
                                    <ul className="submenu">
                                        <li className={classnames({"active": active === formatMessage(messages["route.bulls"])})}><Link messageId="route.bulls" className="nav-link disabled">{formatMessage(messages.member)}</Link></li>
                                        <li className={classnames({"active": active === formatMessage(messages["route.schedule"])})}><Link messageId="route.schedule" className="nav-link">{formatMessage(messages.streamSchedule)}</Link></li>
                                        {/*<li className={classnames({"active": active === formatMessage(messages["route.adventCalendar"])})}><Link messageId="route.adventCalendar" className="nav-link">{formatMessage(messages.adventCalendar)}</Link></li>*/}
                                    </ul>
                                </li>
                                <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.home"]) + "/#regeln" })}>
                                    <Link messageId="route.home" hash="regeln" className="nav-link">{formatMessage(messages.tournament)}</Link>
                                    <ul className="submenu">
                                        <li><Link messageId="route.tournamentRegistration" params={{teams: ""}} className="nav-link">{formatMessage(messages.ruleSignInForm)}</Link></li>
                                        <li className={classnames("disabled", {"active": active === "/de/turnier/teams"})}><Link to={{pathname: "/de/turnier/teams"}} className="nav-link">{formatMessage(messages.teams)}</Link></li>
                                        <li className={classnames("disabled", {"active": active === "/de/turnier/spielplan"})}><Link to={{pathname: "/de/turnier/spielplan"}} className="nav-link">{formatMessage(messages.bracket)}</Link></li>
                                        <li className={classnames({"active": active === formatMessage(messages["route.home"]) + "/#regeln" })}><Link messageId="route.home" hash="regeln" className="nav-link">{formatMessage(messages.ruleHeader)}</Link></li>
                                    </ul>
                                </li>
                                <li className={classnames("nav-item", {"active": active === formatMessage(messages["route.home"]) + "/#partner"})}>
                                    <Link messageId="route.home" hash="partner" className="nav-link">{formatMessage(messages.partner)}</Link>
                                </li>
                            </ul>
                            <LanguageSwitcher />
                            <ul className="navbar-nav d-none d-xl-flex socials">
                                <li className="nav-item"><a className="nav-link" href="https://www.twitch.tv/BattleBullsTV" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitch" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://discord.gg/9psnFwb" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://instagram.com/BattleBulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://twitter.com/BattleBulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/groups/BattlegroundBuLLs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/channel/UCPSSW0COqKjF5nSn-3aYh7w" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                            </ul>
                            <ul ref="navSignIn" className="navbar-nav sign-in">
                                {user ? (
                                    <li className="nav-item logged-in">
                                        <button className="username" onClick={this.toggleUserSidebar}><i className="fas fa-user"/>{user.username}</button>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <i className="fas fa-user d-none d-lg-inline-block" /> <Link messageId="route.login" className="nav-link">{formatMessage(messages.login)}</Link>|<Link messageId="route.register" className="nav-link">{formatMessage(messages.signIn)}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={classnames("sidebar-wrapper", {"open": userSidebarOpen})}>
                    <ul ref="sidebar">
                        <li><Link messageId="route.myProfile"><i className="fas fa-address-card" />{formatMessage(messages.myProfile)}</Link></li>
                        {/*<li><Link to="/einstellungen"><i className="fas fa-cog" />{formatMessage(messages.settings)}</Link></li>*/}
                        <li><Link messageId="route.calendar"><i className="far fa-calendar-alt" />{formatMessage(messages.calendar)}</Link></li>
                        <li onClick={() => { this.props.dispatch(logout()); }}><Link to={this.props.location}><i className="fas fa-sign-out-alt" />{formatMessage(messages.logout)}</Link></li>
                    </ul>
                    <div ref="backdrop" className="backdrop" />
                </div>
            </header>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.application.user
    };
}
export default withRouter(connect(mapStateToProps)(injectIntl(Header)));
