import React from 'react';
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import Redirect from 'react-router-dom/Redirect';

import messages from "../i18n/messages";

export default function requireAuthentication(ChildComponent, role = null) {
    class AuthComponent extends React.PureComponent {
        render() {
            const {intl:{formatMessage}} = this.props;
            let { user } = this.props;
            let render = <Redirect push={true} to={formatMessage(messages["route.login"]) + (this.props.location.pathname !== "" ? '?next=' + this.props.location.pathname : "")}/>;
            if (user !== null) {
                render = <ChildComponent {...this.props} />;
            }
            if (role && user && user.role && user.role.role !== role) {
                render = <Redirect push={true} to={formatMessage(messages["route.login"]) + "?role=" + role + (this.props.location.pathname !== "" ? '&next=' + this.props.location.pathname : "")}/>;
            }
            return render;
        }
    }
    function mapStateToProps(state) {
        return { user: state.user };
    }
    return connect(mapStateToProps)(injectIntl(AuthComponent));
}