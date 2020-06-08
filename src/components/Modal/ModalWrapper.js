import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ModalWrapper = props => {
    return (
        <div id={props.id || ""}>
            <div className={classNames("header", {"with-title": props.title})}>
                <div className="title">{props.title}</div>
                <i className="fa fa-times" onClick={ () => { props.modalClose(); if (props.application.modal.settings.onClose) props.application.modal.settings.onClose() } } />
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

ModalWrapper.propTypes = {
    // props
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,

    // methods
    modalClose: PropTypes.func,
};

ModalWrapper.defaultProps = {
    title: null
};

export default ModalWrapper;
