import React from 'react';
import '../assets/scss/components/EventCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
    const zeroSpots = <b className='text-danger pe-2'>0</b>;
    const spots = <b className='text-primary pe-2'>{event.capacity}</b>;
    const eventCanceled = (
        <div className='sold-out tower-box-shadow'>
            <span className='p-3'>Canceled</span>
        </div>
    );
    const soldOut = (
        <div className='sold-out tower-box-shadow'>
            <span className='p-3'>SOLD OUT</span>
        </div>
    );

    return (
        <div
            style={event.isCanceled ? { filter: 'grayscale(100%)' } : {}}
            className='event-card tower-box-shadow card-border rounded'
        >
            <div className='position-relative card-border rounded'>
                <Link to={`event/${event.id}`}>
                    <img
                        className='img-fluid event-img selectable'
                        src={event.coverImg}
                        alt={event.name}
                    />
                </Link>
                {event.capacity <= 0 && !event.isCanceled ? soldOut : null}
                {event.isCanceled ? eventCanceled : null}
                <div className='position-absolute bottom-0 start-0 glass-card rounded-bottom'>
                    <div className='ps-2 pt-3 text-body-bg'>
                        <b>{event.name}</b>
                    </div>
                    <div className='ps-2 text-info'>{event.location}</div>
                    <div className='px-2 pb-1 text-info text-end'>
                        {event.capacity <= 0 ? zeroSpots : spots}
                        Spots Left
                    </div>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired,
};