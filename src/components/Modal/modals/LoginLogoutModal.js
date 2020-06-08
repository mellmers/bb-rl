import React from "react";

import LoginForm from "./../../Form/LoginForm";
import ModalWrapper from "./../ModalWrapper";

import API from "../../../utils/API";
import messages from "../../../i18n/messages";

const LoginLogoutModal = props => {
    const {intl:{formatMessage}} = props;
    return (
        <ModalWrapper
            {...props}
            id="modal-login"
            title={props.application.modal.settings.title || formatMessage(messages.dialogLoginAgainTitle)}
        >
            <LoginForm onLogin={(user) => { props.modalClose(); if (props.application.modal.settings.onLogin) props.application.modal.settings.onLogin(user) }} />
            <div style={{ margin: "15px 0", textAlign: "center", textTransform: "uppercase", fontWeight: "bold" }}>{formatMessage(messages.or)}</div>
            <button className="btn primary" onClick={() => { props.logout(); API.getInstance().logout(); props.modalClose(); if (props.application.modal.settings.onClose) props.application.modal.settings.onClose() }}>{formatMessage(messages.formBtnLogout)}</button>
        </ModalWrapper>
    );
};

export default LoginLogoutModal;
