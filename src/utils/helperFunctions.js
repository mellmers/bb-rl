import store from "../store";
import translations from "../i18n/locales";

export function searchToObject(search = "") {
    let result = {};
    if (search !== "") {
        if (search[0] === "?") {
            search = search.substring(1);
        }
        let searchParts = search.split("&");
        searchParts.forEach(function (part) {
            part = part.split("=");
            result[part[0]] = part[1];
        });
    }
    return result;
}

export function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

export function translateGender(gender) {
    const appState = store.getState().application;
    if (appState && appState.language && translations[appState.language]) {
        return translations[appState.language]["gender." + gender];
    }

    return gender;
}
