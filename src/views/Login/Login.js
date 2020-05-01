import React from "react";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";

import messages from "./../../i18n/messages";
import {searchToObject} from "./../../utils/helperFunctions";

import LoginForm from "./../../components/Form/LoginForm";

import "./Login.css";

class Login extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderAccessDenied() {
        const { intl:{formatMessage} } = this.props;
        let search = searchToObject(this.props.location.search);
        return search.auth && search.auth === "forbidden" ? (
            <div className="access-denied">
                <Helmet><title>{formatMessage(messages.accessDenied)} - {formatMessage(messages.helmetDefault)}</title></Helmet>
                <div className="alert alert-danger">
                    <h1>{formatMessage(messages.accessDenied)}.</h1> <br/> {formatMessage(messages.loginWithCorrectAuth)}.
                </div>
            </div>
        ) : null;
    }

    render() {
        const { intl:{formatMessage} } = this.props;
        return (
            <div className="view full-container login">
                <div className="container">
                    <Helmet><title>{formatMessage(messages.login)} - {formatMessage(messages.helmetDefault)}</title></Helmet>

                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            {this.renderAccessDenied()}

                            <h1>{formatMessage(messages.login)}</h1>

                            <LoginForm style="light" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default injectIntl(Login);
