import React from "react";
import PropTypes from "prop-types";

import ReadMore from "../ReadMore/ReadMore";

import imgPlaceholder from "./../../images/logo-schriftzug_600px.png";

import "./Member.css";

export default class Member extends React.PureComponent {

    render() {
        let {img, name, job, games, description} = this.props;
        return (
            <div className="member row">
                <div className="col-12 col-md-4">
                    <img src={img ? img : imgPlaceholder} alt={name} />
                </div>
                <div className="col-12 col-md-8">
                    <div><div className="title">Name:</div> {name}</div>
                    <div><div className="title">Funktion:</div> {Array.isArray(job) ? job.join(", ") : job}</div>
                    <div><div className="title">Spiele:</div> {Array.isArray(games) ? games.join(", ") : games}</div>
                    <div><div className="title description">Warum bist du bei den BattleBulls?</div></div>
                    <ReadMore>{description}</ReadMore>
                </div>
            </div>
        );
    }
}
Member.propTypes = {
    name: PropTypes.string,
    job: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    games: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    description: PropTypes.string,
    img: PropTypes.string,
};
