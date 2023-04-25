import React from 'react';
import PropTypes from 'prop-types'

export default function EventCard({event}) {

    return (

        <>
        <h1>{event.name}</h1>
        <img 
        className='sm-event-pic'
        src={event.coverImg} 
        alt={event.name} />
        </>
    )

}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}