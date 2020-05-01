import {
    APPLICATION_LOGIN,
    APPLICATION_LOGOUT,
    APPLICATION_UPDATE_USER,
    APPLICATION_SET_LANGUAGE,
    APPLICATION_MODAL_OPEN, APPLICATION_MODAL_CLOSE
} from "../constants";

export const login = (user) => dispatch => {
    dispatch({
        type: APPLICATION_LOGIN,
        user: user
    })
};

export const logout = () => dispatch => {
    dispatch({
        type: APPLICATION_LOGOUT
    })
};

export const modalClose = () => dispatch => {
    dispatch({
        type: APPLICATION_MODAL_CLOSE
    })
};

export const modalOpen = (modal, settings) => dispatch => {
    dispatch({
        type: APPLICATION_MODAL_OPEN,
        modal: modal,
        settings: settings
    })
};

export const setLanguage = (lang) => dispatch => {
    dispatch({
        type: APPLICATION_SET_LANGUAGE,
        lang: lang
    })
};

export const updateUser = (user) => dispatch => {
    dispatch({
        type: APPLICATION_UPDATE_USER,
        user: user
    })
};
