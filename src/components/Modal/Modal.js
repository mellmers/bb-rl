import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import $ from "jquery";

import {logout, modalClose} from "../../actions/ApplicationActions";
import {MODAL_LOGIN, MODAL_LOGIN_LOGOUT} from "../../constants";

import LoginModal from "./modals/LoginModal";
import LoginLogoutModal from "./modals/LoginLogoutModal";

import "./Modal.css";

const Modal = props => {
    let modal = null;
    const open = props.application.modal.open;

    let $modal = $("#modal"),
        $body = $("body");

    setTimeout(function() {
        $modal.css({
            marginTop: - $modal.outerHeight() / 2,
            marginLeft: - $modal.outerWidth() / 2
        });
    }, 10);

    if (open) {
        $body.addClass("no-scroll");
    } else {
        $body.removeClass("no-scroll");
    }

    switch (props.application.modal.type) {
        case MODAL_LOGIN:
            modal = <LoginModal {...props}/>;
            break;
        case MODAL_LOGIN_LOGOUT:
            modal = <LoginLogoutModal {...props}/>;
            break;
        default:
            break;
    }

    return (
        <div id="modal-wrapper" className={classNames({"open": open})}>
            <Fade top opposite duration={500} when={open}>
                <div id="modal">
                    {modal}
                </div>
            </Fade>
            <Fade duration={500} when={open}>
                <div id="modal-backdrop" onClick={ () => { props.modalClose(); if (props.application.modal.settings.onClose) props.application.modal.settings.onClose() } } />
            </Fade>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        application: state.application
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
        modalClose: () => dispatch(modalClose())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Modal));
