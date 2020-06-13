import React from "react";
import {FormattedMessage} from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";
import $ from "jquery";

import messages from "./../../i18n/messages";
import {PRIVACY_PRIVATE, PRIVACY_PUBLIC, PRIVACY_LOCAL} from "../../constants";

import "./privacySelect.css";

class PrivacySelect extends React.Component {
    constructor(props) {
        super(props);

        const selected = props.selected || PRIVACY_LOCAL;

        // @selected => Select option
        // @selectedText => Visible Text/Icon
        // @showOptionList => Show / Hide List options
        this.state = {
            selected: selected,
            selectedText: this.getSelectedText(selected),
            showOptionList: false
        };
    }

    componentDidMount() {
        // Add Event Listener to handle the click that happens outside
        // the Custom Select Container
        $(document).on("mousedown", this.handleClickOutside);

        // Initial selected
        $(this.refs.select).val(this.state.selected);

        // Activate Tooltip
        $("[data-toggle='tooltip']").tooltip();
    }

    componentWillUnmount() {
        // Remove the event listener on component unmounting
        $(document).off("mousedown");
    }

    // This method handles the click that happens outside the
    // select text and list area
    handleClickOutside = e => {
        if (
            $(e.target).parents(".option").length <= 0 &&
            $(e.target).parents(".selected-text").length <= 0 &&
            !$(e.target).hasClass(".selected-text")
        ) {
            this.setState({
                showOptionList: false
            });
        }
    };

    // This method handles the display of option list
    handleListDisplay = () => {
        this.setState(prevState => {
            return {
                showOptionList: !prevState.showOptionList
            };
        });
    };

    // This method handles the setting of name in select text area
    // and list display on selection
    handleOptionClick = e => {
        const value = $(e.target).parents(".option").data("value");
        const selectedText = this.getSelectedText(value);

        $(this.refs.select).val(value);
        this.setState({
            selected: value,
            selectedText: selectedText,
            showOptionList: false
        });
    };

    getSelectedText = selected => {
        let selectedText = "";
        switch (selected) {
            case PRIVACY_PRIVATE:
                selectedText = <i className="fas fa-lock fw-fw" />;
                break;
            case PRIVACY_LOCAL:
                selectedText = <i className="fas fa-users fw-fw" />;
                break;
            case PRIVACY_PUBLIC:
                selectedText = <i className="fas fa-globe fw-fw" />;
                break;
            default:
                break;
        }
        return selectedText;
    };

    render() {
        const optionsList = [
            { value: PRIVACY_PRIVATE, name: "Privat", description: "Nur für Dich sichtbar", iconClass: "fas fa-lock" },
            { value: PRIVACY_LOCAL, name: "Lokal", description: "Für alle Benutzer sichtbar, die einen Account haben und angemeldet sind", iconClass: "fas fa-users" },
            { value: PRIVACY_PUBLIC, name: "Öffentlich", description: "Für alle Benutzer dieser Webseite sichtbar", iconClass: "fas fa-globe" }
        ];
        const { showOptionList, selected, selectedText } = this.state;
        return (
            <div className="privacy-select">
                <select name={this.props.name} ref="select">
                    {optionsList.map((option, index) => {
                        return <option value={option.value} key={index}>{option.name}</option>;
                    })}
                </select>
                <div
                    className={classNames("selected", { "open": showOptionList })}
                    onClick={this.handleListDisplay}
                >
                    <div className="selected-text" title="Privatsphäre anpassen" data-toggle="tooltip" data-placement="left"><span className="text">{selectedText}</span> <i className="arrow fas fa-caret-down" /></div>
                </div>
                {showOptionList && (
                    <ul className="options">
                        {optionsList.map((option, index) => {
                            return (
                                <li
                                    className={classNames("option", { "selected": selected === option.value })}
                                    data-value={option.value}
                                    key={index}
                                    onClick={this.handleOptionClick}
                                >
                                    <i className={option.iconClass} />
                                    <div className="text">
                                        <div className="name">{option.name}</div>
                                        <div className="description">{option.description}</div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        );
    }
}

PrivacySelect.propTypes = {
    // props
    name: PropTypes.string.isRequired,
    selected: PropTypes.oneOf([PRIVACY_PRIVATE, PRIVACY_LOCAL, PRIVACY_PUBLIC]),

    // methods
};

export default PrivacySelect;
