import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {withRouter} from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import $ from "jquery";

import API from "./../../utils/API";
import {login} from "./../../actions/ApplicationActions";
import messages from "./../../i18n/messages";
import {searchToObject} from "./../../utils/helperFunctions";

class LoginForm extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let form = $(this.refs.form);
        console.log(form.serializeObject())

        API.getInstance().login(form.serializeObject())
            .then( user => {
                let search = searchToObject(this.props.location.search);
                this.props.dispatch(login(user));
                this.props.history.push(search.next || "/" + this.props.language);
                form[0].reset();
                if (this.props.onLogin) this.props.onLogin();
            })
            .catch( error => {
                this.setState({error: error });
            });
    }

    renderErrors() {
        let error = this.state.error;
        if (error !== null && error.message) {
            return <div className="alert alert-danger" style={{marginTop: "15px"}}>{error.message}</div>;
        }
        return null;
    }

    render() {
        const { intl:{formatMessage}, style } = this.props;
        return (
            <form ref="form" className={classNames("login-form", style)} onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">{formatMessage(messages.formUsername)}</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder={formatMessage(messages.formUsername)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">{formatMessage(messages.formPassword)}</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder={formatMessage(messages.formPassword)} required/>
                </div>
                <button type="submit" className={classNames("btn", {"primary": style === "dark"}, {"white": style === "light"})}>{formatMessage(messages.formBtnLogin)}</button>
                {this.renderErrors()}
            </form>
        );
    }
}
LoginForm.propTypes = {
    // props
    style: PropTypes.string.isRequired,

    // methods
    onLogin: PropTypes.func
};

LoginForm.defaultProps = {
    style: "dark"
};

function mapStateToProps(state, props) {
    return {
        language: state.application.language
    };
}
export default withRouter(connect(mapStateToProps)(injectIntl(LoginForm)));
