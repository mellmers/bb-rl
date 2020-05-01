import React from "react";

import ModalWrapper from "./../ModalWrapper";
import LoginForm from "./../../Form/LoginForm";

const LoginModal = props => {
    return (
        <ModalWrapper
            {...props}
            id="modal-login"
            title={props.application.modalSettings.title || "Login"}
        >
            <LoginForm onLogin={props.modalClose} />
        </ModalWrapper>
    );
};

export default LoginModal;
