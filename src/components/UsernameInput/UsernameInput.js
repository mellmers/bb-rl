import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import $ from "jquery";

import API from "../../utils/API";

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
            API.getInstance()._fetch("/users/verify-username/", "POST", {username: username})
                .always(response => {
                    this.setState({ usernameStatus: response.status });
                    if (this.props.onChange) {
                        this.props.onChange(response.status === 204);
                    }
                });
        }, 500);
    }

    render() {
        let { usernameStatus } = this.state;
        let { className, defaultValue, placeholder, user} = this.props;
        return (
            <div className={"form-group" + (className ? " " + className : "")}>
                <label htmlFor="username">Benutzername <span className="required">*</span></label>
                <input type="text" className="form-control" id="username" name="username" defaultValue={defaultValue ? user.username : ""} placeholder={placeholder ? placeholder : "Benutzername"} onChange={this.onUsernameChange} maxLength={255} required/>
                {usernameStatus ? usernameStatus === 204 ? (
                    <div className="alert alert-success" role="alert">Benutzername ist verfügbar</div>
                ) : (
                    <div className="alert alert-danger" role="alert">Benutzername ist leider schon vergeben</div>
                ) : null}
            </div>
        );
    }
}
UsernameInput.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};
function mapStateToProps(state, props) {
    return {
        user: state.application.user
    };
}
export default connect(mapStateToProps)(UsernameInput);
