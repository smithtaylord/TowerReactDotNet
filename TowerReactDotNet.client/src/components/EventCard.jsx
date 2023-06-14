import React from 'react';
import '../assets/scss/components/EventCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
    const zeroSpots = <b className='text-danger pe-2'>0</b>;
    const spots = <b className='text-primary pe-2'>{event.capacity}</b>;
    const eventCanceled = (
        <div className='canceled tower-box-shadow'>
            <span></span>
        </div>
    );
    const soldOut = (
        <div className='sold-out tower-box-shadow'>
            <span></span>
        </div>
    );
    const spotsLeft = (
        <div className='px-2 pb-1 text-info text-end'>
            {event.capacity <= 0 ? zeroSpots : spots}
            Spots Left
        </div>)
    const canceled = (
        <div className='px-2 pb-1 text-info text-end'>
            <b className='pe-2'>CANCELED</b>
        </div>)

    return (
        <Link to={`event/${event.id}`}>
            <div
                style={event.isCanceled ? { filter: 'grayscale(100%)' } : {}}
                className='event-card tower-box-shadow card-border rounded selectable'
            >
                <div className='position-relative card-border rounded'>
                    <img
                        className='img-fluid event-img'
                        src={event.coverImg}
                        alt={event.name}
                    />
                    {event.capacity <= 0 && !event.isCanceled ? soldOut : null}
                    {event.isCanceled ? eventCanceled : null}
                    <div className='position-absolute bottom-0 start-0 glass-card'>
                        <div className='ps-2 pt-3 text-body-bg'>
                            <b>{event.name}</b>
                        </div>
                        <div className='ps-2 text-info'>{event.location}</div>
                        {event.isCanceled ? canceled : spotsLeft}

                    </div>
                </div>
            </div>
        </Link>
    );
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired,
};