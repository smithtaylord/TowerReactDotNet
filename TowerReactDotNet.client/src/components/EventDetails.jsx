import React from 'react';
import PropTypes from 'prop-types'
import '../assets/scss/components/EventDetails.scss'
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';

export default function EventDetails({ event }) {

    async function cancelEvent() {
        try {
            if (await Pop.confirm('Are you sure you would like to cancel this event?')) {
                await eventsService.cancelEvent(event.id)
            }
        }
        catch (error) {
            Pop.error(error);
        }
    }


    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-12">
                    <div className='tower-box-shadow bg-card ms-3'
                        style={event.isCanceled ? { backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover', filter: 'grayscale(50%)' } : { backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover' }}>
                        <div className='bg-card'>
                            <div className="row">
                                <div className="col-4">
                                    <img className='img-fluid event-pic border m-3'
                                        src={event.coverImg} alt={event.name} />
                                </div>
                                <div className='col-8'>
                                    <div className='text-end mt-3'
                                        title='cancel event'
                                        onClick={cancelEvent}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 35 35"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="text-danger cancel selectable me-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-between ms-3">
                                        <div>
                                            <div className="pb-3 fs-2">{event.name}</div>
                                            <div className="text-info">{event.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-info pb-3 text-end pe-3 me-3 fs-3">{event.date}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="event-body pt-3 mx-3">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div className='pb-3 d-flex justify-content-between'>
                                        <span>
                                            <b className='fs-2 pe-2 ms-3 text-info'>
                                                {event.isCanceled ? 'Event Canceled' : event.capacity}
                                            </b>{event.isCanceled ? '' : 'Spots Left'}
                                        </span>
                                        <button>Attend?</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}