import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import $ from "jquery";
import {Helmet} from "react-helmet";
import cloneDeep from "lodash/cloneDeep";

import UsernameInput from "../../components/UsernameInput/UsernameInput";
import RequiredHint from "../../components/Form/RequiredHint";

import {login} from "../../actions/ApplicationActions";
import {searchToObject} from "../../utils/helperFunctions";
import API from "./../../utils/API";
import {ERROR_PASSWORD_NOT_EQUAL, ERROR_PASSWORD_REGEX} from "./../../constants";

import "./Registration.css";

class Registration extends React.PureComponent {

    initialErrors = { password: [] };

    constructor(props) {
        super(props);

        this.state = {
            errors: cloneDeep(this.initialErrors),
            usernameValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();

        let formData = $(this.refs.form).serializeObject(),
            errors = cloneDeep(this.initialErrors);

        if (!this.state.usernameValid) {
            return;
        }

        if (formData.password1 !== formData.password2) {
            errors.password.push(ERROR_PASSWORD_NOT_EQUAL);
        }

        // Password regex: min. 8 chars, one number, one uppercase and one lowercase letter
        if (formData.password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,255}$/) === null) {
            errors.password.push(ERROR_PASSWORD_REGEX);
        }

        if (JSON.stringify(errors) !== JSON.stringify(this.initialErrors)) { // set errors and cancel submit
            this.setState({errors: errors});
            return;
        } else if (JSON.stringify(this.state.errors) !== JSON.stringify(this.initialErrors)) { // reset errors, if currently no errors occur
            this.setState({errors: errors});
        }

        // If all conditions valid, register user
        API.getInstance()._fetch("/users", "POST", {
            email: formData.mail,
            password: formData.password1,
            username: formData.username
        }).then(response => {
            if (response._id) {
                let search = searchToObject(this.props.location.search);
                this.props.dispatch(login(response));
                this.props.history.push(search.next || "/" + this.props.language);
            }
        });
    }

    renderPasswordError() {
        let { errors } = this.state;
        let passwordErrorDiv = [],
            passwordErrorText = null;
        if (errors.password.length > 0) {
            errors.password.forEach(error => {
                switch (error) {
                    case ERROR_PASSWORD_NOT_EQUAL:
                        passwordErrorText = "Die Passwörter stimmen nicht überein.";
                        break;
                    case ERROR_PASSWORD_REGEX:
                        passwordErrorText = "Das Passwort sollte mindestens 8 Zeichen lang sein, eine nummerische Ziffer, einen Groß- und einen Kleinbuchstaben enthalten.";
                        break;
                }
                passwordErrorDiv.push(<div className="alert alert-danger">{passwordErrorText}</div>);
            });
        }

        return passwordErrorDiv;
    }

    render() {
        return (
            <div className="view full-container registration">
                <div className="container">
                    <Helmet><title>Registration - BattleBulls</title></Helmet>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            <h1>Registrierung</h1>

                            <form ref="form" onSubmit={this.onSubmit}>
                                <RequiredHint />
                                <div className="form-group">
                                    <label htmlFor="mail">E-Mail-Adresse</label>
                                    <input type="email" className="form-control" id="mail" name="mail" aria-describedby="mailHelp" placeholder="E-Mail-Adresse"/>
                                    <small id="mailHelp" className="form-text mail-info">Wir werden deine E-Mail-Adresse niemals mit anderen teilen.</small>
                                </div>
                                <UsernameInput onChange={valid => {this.setState({usernameValid: valid});}}/>
                                <div className="form-group">
                                    <label htmlFor="password1">Passwort <span className="required">*</span></label>
                                    <input type="password" className="form-control" id="password1" name="password1" placeholder="Passwort" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Passwort wiederholen <span className="required">*</span></label>
                                    <input type="password" className="form-control" id="password2" name="password2" placeholder="Passwort wiederholen" required/>
                                    {this.renderPasswordError()}
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="privacy" required/>
                                    <label className="form-check-label" htmlFor="privacy">Bitte akzeptiere unsere <Link to="/datenschutz" target="_blank">Datenschutzbestimmungen</Link>.</label>
                                </div>
                                <button type="submit" className="btn white">Registrierung abschließen</button>
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
export default connect(mapStateToProps)(Registration);
