import React from 'react';
import PropTypes from 'prop-types'
import '../assets/scss/components/EventDetails.scss'
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { ticketsService } from '../services/TicketsService.js';
import { AppState } from '../AppState.js';

export default function EventDetails({ event }) {
    const addUserBtn = (
        <button className='btn bg-warning selectable me-3'
            onClick={createTicket}>
            <span className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor" className="mt-3">
                    <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                </svg>
                <div>
                    Attend Event
                </div>
            </span>
        </button>
    )
    const removeUserBtn = (
        <button className='btn bg-danger selectable me-3'
            onClick={createTicket}>
            <span className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor" className="mt-3">
                    <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 008 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 00-11.908 0zM12.75 7.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
                </svg>

                <div>
                    Return Ticket
                </div>
            </span>
        </button>
    )
    const foundTicket = AppState.attendees.find(a => a.account.id == AppState.account?.id)
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
    async function createTicket() {
        try {
            await ticketsService.createTicket(event.id)
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
                                        {foundTicket ?
                                            (<div>{removeUserBtn}</div>)
                                            :
                                            (<div>{addUserBtn}</div>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}