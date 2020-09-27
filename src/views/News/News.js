import React from "react";
import classnames from "classnames";
import {Helmet} from "react-helmet";
import $ from "jquery";

import Link from "../../components/Link/Link";

import news1 from "./img/news1.png";
import news1Detail from "./img/news1.png";
import news2 from "./img/news2.png";
import news2Detail from "./img/news2.png";
import news3 from "./img/news3.png";
import news3Detail from "./img/news3.png";
import news4 from "./img/news4.png";
import news4Detail from "./img/news4.png";

import "./News.css";

export default class News extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    static getNews(title) {
        let news = [
            {
                author: "Malthe S.",
                img: news1,
                imgDetail: news1Detail,
                category: "Stream",
                date: "28. Juli 2018",
                title: "Homepage Online",
                text: "Liebe Community und Mitglieder der BattleBulls," +
                    "heute möchten wir euch mitteilen, dass unsere Homepage sich aktuell in der Startphase befindet.<br>" +
                    "Wir arbeiten stets daran, neue Features und Inhalte für euch zur Verfügung zu stellen, um euch " +
                    "unsere Homepage so schmackhaft wie möglich zu machen." +
                    "Ebenso streben wir an, die Homepage so benutzerfreundlich wie möglich für euch zu gestalten.<br>" +
                    "Im Laufe der kommenden Monate werdet ihr hier immer wieder Updates vorfinden, was sich verändert" +
                    "hat, oder was neues dazu gekommen ist.<br>" +
                    "Wir freuen uns natürlich, wenn ihr zwischendurch immer mal wieder hier vorbei schaut und guckt was" +
                    "es Neues zu entdecken gibt.<br>" +
                    "Ebenso ist für uns ein Feedback von euch sehr, sehr wichtig, da wir mit euch zusammen eine möglichst" +
                    "perfekte Homepage erschaffen wollen. Bitte teilt uns eure Meinung im Discord mit.<br>" +
                    "Hauptschwerpunkt dabei fällt auf unseren Stream Kanal und auf die Rocket League Turniere.<br>" +
                    "<p>Außerdem sind wir aber auch daran interessiert, einige Features für euch zu entwickeln, was euch dazu" +
                    "ermutigen soll in unserem Stream Kanal aktiv mit zu wirken.</p>" +
                    "" +
                    "<p>Wir bedanken uns für deinen Besuch und hoffen dich bald wieder zu sehen.</p>" +
                    "" +
                    "<p>Euer BattleBulls Team</p>"

            },
            {
                author: "Malthe S.",
                img: news2,
                imgDetail: news2Detail,
                category: "Stream",
                date: "27. Juli 2018",
                title: "Subscriber Treue Icon",
                text: "Wir freuen uns euch mitteilen zu dürfen, dass ab sofort die neuen Subscriber Icons vor eurem Nicknamen im Stream verfügbar sind. Das Bislang eher langweilige Icon mit dem lila umrandeten Stern ist geschichte und wurde von uns durch eine Reihe Bumpetys ersetzt. Freut euch also darauf, jenachdem wie lange ihr bei uns Subscriber seit, sich das Bild vor eurem Namen verändert." +
                    "Wir haben aktuell folgende Ränge: Basic Sub: Kid Bumpety | 3-Monate Sub: Teenager Bumpety | 6-Monate Sub: Erwachsender Bumpety | 12 Monat Sub: Opa Bumpety. Wir hoffen ihr freut euch über euer neues Bildchen und seid weiterhin bestrebt uns zu untersützen. Hiermit nochmal ein riesen Dank an euch, dass ihr uns diese tollen neuen Features ermöglicht, denn ohne euch wäre es nicht machbar."
            },
            {
                author: "Malthe S.",
                img: news3,
                imgDetail: news3Detail,
                category: "Stream",
                date: "26. Juli 2018",
                title: "Stream 1"
            },
            {
                author: "Malthe S.",
                img: news4,
                imgDetail: news4Detail,
                category: "Hardware",
                date: "25. Juli 2018",
                title: "Hardware"
            }
        ];

        if (title) {
            let singleNews = {};
            news.forEach( news => {
                if (news.title === title) {
                    singleNews = news;
                }
            });
            return singleNews;
        }

        return news;
    }

    handleScriptInject(addedTags) {
        if (addedTags.scriptTags && addedTags.scriptTags.length === 1) {
            addedTags.scriptTags[0].addEventListener('load', this.loadIsotope.bind(this));
        } else {
            this.loadIsotope();
        }
    }

    loadIsotope() {
        let $grid = $(this.refs.grid).isotope({
            itemSelector: ".grid-item",
        });

        // bind filter action
        let btnGroup = $(this.refs.buttonGroup);
        btnGroup.on("click", "button", function() {
            let filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });

            // Set active button
            btnGroup.find("button").removeClass("active");
            $(this).addClass("active");
        });

        this.setState({ loading: false });
    }

    render() {
        let { loading } = this.state;
        let news = News.getNews();
        let newsGrids = [];
        news.forEach((news) => {
            newsGrids.push(
                <Link messageId="route.newsDetail" params={{title: news.title.replace(/ /g, "-")}} className={"grid-item " + news.category} data-category={news.category} key={news.title}>
                    <div className="inner-wrapper">
                        <img src={news.img} alt="" />
                        <div className="overlay">
                            <div className="date">{news.date}</div>
                            <div className="title" title={news.title}>{news.title}</div>
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <div className="view full-container news">
                <Helmet onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
                    <title>News - BattleBulls</title>
                    <script src="/js/isotope.min.js" async defer />
                </Helmet>

                <div className="container">
                    <h1>Aktuelle News</h1>

                    <div ref="buttonGroup" className="button-group filters-button-group">
                        <button className="btn white active" data-filter="*">Alle anzeigen</button>
                        <button className="btn white" data-filter=".Hardware">Hardware</button>
                        <button className="btn white" data-filter=".Stream">Stream</button>
                    </div>

                    <div ref="grid" className={classnames("grid", {"loading": loading})}>
                        {newsGrids}
                        {loading ? <i className="fas fa-cog fa-spin" /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
