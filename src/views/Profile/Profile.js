import React from "react";
import Helmet from "react-helmet";

import API from "./../../utils/API";

import headerImg from "./header.svg";

import "./Profile.css";

class Profile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentWillMount() {
        let username = this.props.match.params.username;
        if (username) {
            API.getInstance()._fetch("/users/?username=" + username)
                .then(response => {
                    if (response && response.total > 0 && response.data) {
                        this.setState({user: response.data[0]});
                    }
                });
        }
    }

    render() {
        let { user } = this.state,
            usernameFromUrl = this.props.match.params.username;
        console.log(user);
        if (user === null) {
            return (
                <div id="profile" className="view full-container profile">
                    <Helmet><title>Profil von {usernameFromUrl} - Battleground-Bulls</title></Helmet>
                    <div className="container">
                        <h1>Profil von {usernameFromUrl} lädt ...</h1>
                    </div>
                </div>
            );
        }
        return (
            <div id="profile" className="view full-container profile">
                <Helmet><title>{user.username} - Battleground-Bulls</title></Helmet>
                <div className="container">
                    <div className="row header">
                        <img src={headerImg} alt="" />
                        <div className="username">{user.username}</div>
                    </div>
                    <h1><i className="far fa-address-card highlighted-text" /> Profil von {user.username}</h1>
                    <div className="row">
                        <div className="col-sm-2">
                            <ul className="nav nav-tabs flex-column light">
                                <li className="nav-item"><a href="#info" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="info"><i className="fas fa-info fa-fw"/> Infos</a></li>
                                <li className="nav-item"><a href="#hardware" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="hardware"><i className="fas fa-desktop fa-fw"/> Hardware</a></li>
                                <li className="nav-item"><a href="#games" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="games"><i className="fas fa-gamepad fa-fw"/> Games</a></li>
                                <li className="nav-item"><a href="#team" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="team"><i className="fas fa-users fa-fw"/> Team</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-10 tab-content">
                            <div id="info" className="collapse show" data-parent="#profile">
                                <h2>Informationen</h2>
                            </div>
                            <div id="hardware" className="collapse" data-parent="#profile">
                                <h2>Hardware</h2>
                            </div>
                            <div id="games" className="collapse" data-parent="#profile">
                                <h2>Games</h2>
                            </div>
                            <div id="team" className="collapse" data-parent="#profile">
                                <h2>Team</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
