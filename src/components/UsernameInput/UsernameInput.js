import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import PropTypes from "prop-types";
import $ from "jquery";

import API from "./../../utils/API";
import messages from "./../../i18n/messages";

class UsernameInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            usernameStatus: null
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
    }

    onUsernameChange(e) {
        let input = $(e.target);
        clearTimeout(this.usernameChangeTimeout);
        this.usernameChangeTimeout = setTimeout(() => {
            let username = input.val();
            API.getInstance()._fetch("/users/?verification=true&username=" + username)
                .always(response => {
                    const usernameAvailable = response.code === 200;
                    let usernameValid = true;
                    this.setState({usernameStatus: response.code});
                    if (this.props.onChange) {
                        this.props.onChange(usernameAvailable && usernameValid);
                    }
                });
        }, 500);
    }

    renderAlert() {
        const { intl:{formatMessage} } = this.props;
        let { usernameStatus } = this.state,
            alert = null;

        switch (usernameStatus) {
            case 200:
                alert = <div className="alert alert-success" role="alert">{formatMessage(messages.errorUsernameAvailable)}</div>;
                break;
            case 409:
                alert = <div className="alert alert-danger" role="alert">{formatMessage(messages.errorUsernameTaken)}</div>;
                break;
            default:
                break;
        }

        // TODO: Validierung - z.B. Mindestzeichenlänge

        return alert;
    }

    render() {
        const { className, defaultValue, intl:{formatMessage}, placeholder, user} = this.props;
        return (
            <div className={"form-group" + (className ? " " + className : "")}>
                <label htmlFor="username">{formatMessage(messages.formUsername)} <span className="required">*</span></label>
                <input type="text" className="form-control" id="username" name="username" defaultValue={defaultValue ? user.username : ""} placeholder={placeholder ? placeholder : formatMessage(messages.formUsername)} onChange={this.onUsernameChange} maxLength={255} required/>
                {this.renderAlert()}
            </div>
        );
    }
}
UsernameInput.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.bool,
    onChange: PropTypes.func,       // Is username available and valid?
    placeholder: PropTypes.string
};
function mapStateToProps(state, props) {
    return {
        user: state.application.user
    };
}
export default connect(mapStateToProps)(injectIntl(UsernameInput));
