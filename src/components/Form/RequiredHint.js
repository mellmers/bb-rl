import React from "react";
import {FormattedHTMLMessage} from "react-intl";

import messages from "./../../i18n/messages";

export default function (props) {
    return  <div className="required-hint"><FormattedHTMLMessage {...messages.formRequiredHint}/></div>;
}
