import React from "react";
import PropTypes from "prop-types";
import "./event-card.scss";

const formattedTime = (start, end) => {
  if (start && !end) { return start; }
  if (start && end) { return `${start} to ${end}`}
};

/**
 * Event Card:
 * A compact display of an event's details.
 */
const EventCard = ({
    title,
    date,
    location,
    startTime,
    endTime,
    image,
    children
}) => {
    const time = formattedTime(startTime, endTime);
    return (
        <article className="event-card">
            <img src={image}/>
            <div className="event-card__details">
                <h2>{title}</h2>
                <p>{date}</p>
                {time && (<p className="event-card__time">{time}</p>)}
                <address>{location}</address>
            </div>
            <div className="event-card__desc">
                {children}
            </div>
        </article>
    );
};

EventCard.propTypes = {
    /** Name of event */
    title: PropTypes.string.isRequired,
    /** Date of event */
    date: PropTypes.string.isRequired,
    /** Place where event is held */
    location: PropTypes.string.isRequired,
    /** Starting time of event */
    startTime: PropTypes.string,
    /** When the event is scheduled to end */
    endTime: PropTypes.string,
    /** Image associated with event */
    image: PropTypes.string
};

export default EventCard;