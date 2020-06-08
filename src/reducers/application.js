import {DEFAULT_LANG} from "../i18n/supportedLanguages";

import {
    APPLICATION_LOGIN,
    APPLICATION_LOGOUT,
    APPLICATION_MODAL_CLOSE,
    APPLICATION_MODAL_OPEN,
    APPLICATION_SET_LANGUAGE,
    APPLICATION_UPDATE_USER
} from "../constants";

const initialState = {
    language: DEFAULT_LANG,
    modal: {
        settings: {},
        open: false,
        type: null
    },
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION_LOGIN:
        case APPLICATION_UPDATE_USER:
            return {
                ...state,
                user: {...state.user, ...action.user}
            };
        case APPLICATION_LOGOUT:
            return {
                ...state,
                user: null
            };

        case APPLICATION_MODAL_CLOSE:
            return {
                ...state,
                modal: {
                    open: false,
                    settings: {}
                }
            };
        case APPLICATION_MODAL_OPEN:
            return {
                ...state,
                modal: {
                    open: true,
                    settings: action.settings,
                    type: action.modal
                }
            };
        case APPLICATION_SET_LANGUAGE:
            return {
                ...state,
                language: action.lang
            };
        default:
            return state;
    }
}
