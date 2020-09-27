import React from "react";
import "moment/min/locales.min";
import "fullcalendar";
import $ from "jquery";
import {Helmet} from "react-helmet";

import "fullcalendar/dist/fullcalendar.min.css";
import "./Calendar.css";

export default class Calendar extends React.PureComponent {

    componentDidMount() {
        $(this.refs.calendar).fullCalendar({
            bootstrapFontAwesome: {
                //prev: 'fa-chevron-left',
            },
            businessHours: {
                start: "10:00",
                end: "22:00"
            },
            eventLimit: 3,
            events: [
                {
                    title  : 'Geburtstag Jana/MrsMadness',
                    start  : '2018-07-06'
                },
                {
                    title  : 'Wochenende',
                    start  : '2018-07-13',
                    end    : '2018-07-16'
                },
                {
                    title  : 'Termin mit Uhrzeit',
                    start  : '2018-07-10T12:30:00'
                },
                {
                    title  : 'Viele Termine an einem Tag',
                    start  : '2018-07-25'
                },
                {
                    title  : 'Viele Termine an einem Tag',
                    start  : '2018-07-25'
                },
                {
                    title  : 'Viele Termine an einem Tag',
                    start  : '2018-07-25'
                },
                {
                    title  : 'Viele Termine an einem Tag',
                    start  : '2018-07-25'
                },
                {
                    title  : 'Viele Termine an einem Tag',
                    start  : '2018-07-25'
                }
            ],
            footer: {
                left: "prevYear,prev,next,nextYear today",
                center: "",
                right: "agendaDay,agendaWeek,month,list"
            },
            header: {
                left: "prevYear,prev,next,nextYear today",
                center: "title",
                right: "agendaDay,agendaWeek,month,list"
            },
            locale: "de",
            navLinks: true,
            nowIndicator: true,
            selectable: true,
            themeSystem: "bootstrap4",
            weekNumbers: true,
            weekNumberTitle: ""
        })
    }

    render() {
        return (
            <div className="view full-container calendar">
                <Helmet><title>Kalender - BattleBulls</title></Helmet>
                <div className="container">
                    <div ref="calendar" />
                </div>
            </div>
        )
    }
}
