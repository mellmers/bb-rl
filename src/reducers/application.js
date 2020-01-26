import {DEFAULT_LANG} from "../i18n/supportedLanguages";

import {APPLICATION_LOGIN, APPLICATION_LOGOUT, APPLICATION_UPDATE_USER, APPLICATION_SET_LANGUAGE} from "../constants";
import $ from "jquery";

const initialState = {
    language: DEFAULT_LANG,
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
        case APPLICATION_SET_LANGUAGE:
            return {
                ...state,
                language: action.lang
            };
        default:
            return state;
    }
}
