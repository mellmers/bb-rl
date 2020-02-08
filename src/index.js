import React from 'react';
import ReactDOM from 'react-dom';
import /*registerServiceWorker,*/ {unregister} from './registerServiceWorker';
import {Provider} from "react-redux";
import store from "./store";

/* eslint-disable import/first */
import $ from 'jquery';
import 'bootstrap';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import iscroll from 'iscroll';

window.jQuery = $;
window.IScroll = iscroll;
require('fullpage.js/vendors/scrolloverflow');
require('fullpage.js');

(function ($) {
    $.fn.serializeObject = function () {

        let self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push": /^$/,
                "fixed": /^\d+$/,
                "named": /^[a-zA-Z0-9_]+$/
            };


        this.build = function (base, key, value) {
            base[key] = value;
            return base;
        };

        this.push_counter = function (key) {
            if (push_counters[key] === undefined) {
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function () {

            // skip invalid keys
            if (!patterns.validate.test(this.name)) {
                return;
            }

            let k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while ((k = keys.pop()) !== undefined) {

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if (k.match(patterns.push)) {
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if (k.match(patterns.fixed)) {
                    merge = self.build([], k, merge);
                }

                // named
                else if (k.match(patterns.named)) {
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})($);

const rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import our main App component, and render it
    const App = require("./App").default;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    const renderApp = render;
    // In development, we wrap the rendering function to catch errors,
    // and if something breaks, log the error and render it to the screen
    render = () => {
        try {
            renderApp();
        }
        catch(error) {
            console.error(error);
        }
    };

    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept("./App", () => {
        setTimeout(render);
    });
}

render();

//registerServiceWorker();
unregister();
