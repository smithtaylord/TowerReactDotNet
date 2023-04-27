import React from 'react';
import '../assets/scss/components/EventCard.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {

    return (
        <div className='event-card tower-box-shadow card-border rounded'>
            <div className='card position-relative card-border rounded'>
                <Link to={`event/${event.id}`}>
                    <img
                        className='img-fluid event-img selectable'
                        src={event.coverImg}
                        alt={event.name} />
                </Link>
                <div className='position-absolute bottom-0 start-0 glass-card rounded-bottom'>
                    <div className='ps-2 pt-3 text-body-bg'>
                        <b>{event.name}</b>
                    </div>
                    <div className='ps-2 text-info'>{event.location}</div>
                    <div className='px-2 pb-1 text-info text-end'>
                        <b className='text-primary pe-2'>{event.capacity}</b>
                        spots left
                    </div>
                </div>
            </div>
        </div>
    )


}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}