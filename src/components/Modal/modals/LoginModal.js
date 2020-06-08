import React from "react";

import ModalWrapper from "./../ModalWrapper";
import LoginForm from "./../../Form/LoginForm";
import messages from "../../../i18n/messages";

const LoginModal = props => {
    const {intl:{formatMessage}} = props;
    return (
        <ModalWrapper
            {...props}
            id="modal-login"
            title={props.application.modal.settings.title || formatMessage(messages.login)}
        >
            <LoginForm onLogin={props.modalClose} />
        </ModalWrapper>
    );
};

export default LoginModal;
