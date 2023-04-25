import React from 'react';
import PropTypes from 'prop-types'

export default function EventCard({event}) {

    return (

        <>
        <img 
        className='sm-event-pic'
        src={event.coverImg} 
        alt={event.name} />
        <div>
            <h3>{event.name}</h3>
            <div>{event.capacity} Spots Left</div>
        </div>
        </>
    )

}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}