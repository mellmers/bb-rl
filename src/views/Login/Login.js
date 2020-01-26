import React from 'react';
import $ from 'jquery';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

import {login} from "../../actions/ApplicationActions";

import API from "../../utils/API";
import {searchToObject} from '../../utils/helperFunctions';

import './Login.css';

class Login extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();
        let formData = $("form").serializeObject();

        API.getInstance()._fetch("/api/token/", "POST", {
            username: formData.username,
            password: formData.password,
        }, null, null).then(auth => {
            console.log(auth);
            if (auth.access && auth.refresh) {
                API.getInstance()._fetch("/users/me/", "GET", null, null, {
                    "Authorization": "Bearer " + auth.access
                }).then(user => {
                    if (user.id && user.username) {
                        let search = searchToObject(this.props.location.search);
                        user = $.extend(user, { accessToken: auth.access, refreshToken: auth.refresh });
                        console.log('User logged in:', user);

                        this.props.dispatch(login(user));
                        this.props.history.push(search.next || "/" + this.props.language);
                    }
                }).catch(error => {
                    this.setState({ error: error });
                });
            }
        }).catch(error => {
            this.setState({ error: error });
        });
    }

    renderAccessDenied() {
        let search = searchToObject(this.props.location.search);
        return search.role ? (
            <div className="access-denied">
                <Helmet><title>Zugriff verweigert - BattleBulls</title></Helmet>
                <div className="alert alert-danger">
                    <h1>Zugriff verweigert.</h1> <br/> Bitte logge dich mit der richtigen Berechtigung ein.
                </div>
            </div>
        ) : null;
    }

    renderErrors() {
        let error = this.state.error;
        if (error !== null && error.message) {
            return <div className="alert alert-danger">{error.message}</div>;
        }
        return null;
    }

    render() {
        return (
            <div className="view full-container login">
                <div className="container">
                    <Helmet><title>Login - BattleBulls</title></Helmet>

                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            {this.renderAccessDenied()}

                            <h1>Login</h1>

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Benutzername</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Benutzername" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Passwort</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Passwort" required/>
                                </div>
                                <button type="submit" className="btn white">Einloggen</button>
                                {this.renderErrors()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        language: state.application.language
    };
}
export default connect(mapStateToProps)(Login);
