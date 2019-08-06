import React from 'react';
import {FormattedHTMLMessage, injectIntl} from "react-intl";

import messages from "../../i18n/messages";
import SquareCard from '../SquareCard/SquareCard';

import kuehe from './img/kuehe.png';
import setup from './img/setup.png';
import streamtimes from './img/streamtimes.png';

class About extends React.PureComponent {
    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div className="section bulls">
                <div className="container">
                    <div className="inner">
                        <h2><FormattedHTMLMessage {...messages.aboutBullsHtmlFormatted} /></h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>
                                    {formatMessage(messages.aboutContent1)}
                                </p>
                                <p>
                                    {formatMessage(messages.aboutContent2)}
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    {formatMessage(messages.aboutContent3)}
                                </p>
                                <p>
                                    {formatMessage(messages.aboutContent4)}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={streamtimes}
                                    text={formatMessage(messages.aboutLink1)}
                                    linkTo="route.schedule"
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={kuehe}
                                    text={<FormattedHTMLMessage {...messages.aboutLink2} />}
                                    linkTo="route.contact"
                                    linkText={formatMessage(messages.applyNow)}
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={setup}
                                    text={formatMessage(messages.aboutLink3)}
                                    linkTo="https://docs.google.com/document/d/1cQO5QDKdD0eSQG0GA1yMonL7T0TjIHBzxzlK8iShJRY/"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-down"><i className="fa fa-chevron-down"/>{formatMessage(messages.scrollDown)}</div>
            </div>
        );
    }
}
export default injectIntl(About);