import React from "react";
import {connect} from "react-redux";
import Fade from 'react-reveal/Fade';
import classNames from "classnames";
import $ from "jquery";

import {modalClose} from "../../actions/ApplicationActions";
import {MODAL_LOGIN} from "../../constants";

import LoginModal from "./modals/LoginModal";

import "./Modal.css";

const Modal = props => {
    let modal = null;
    const open = props.application.modalOpen;

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

    switch (props.application.modalType) {
        case MODAL_LOGIN:
            modal = <LoginModal {...props}/>;
            break;
    }

    return (
        <div id="modal-wrapper" className={classNames({'open': open})}>
            <Fade top opposite duration={500} when={open}>
                <div id="modal">
                    {modal}
                </div>
            </Fade>
            <Fade duration={500} when={open}>
                <div id="modal-backdrop" onClick={props.modalClose} />
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
        modalClose: () => dispatch(modalClose())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
