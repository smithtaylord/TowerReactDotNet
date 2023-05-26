import React from 'react';
import PropTypes from 'prop-types'
import '../assets/scss/components/EventDetails.scss'
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { ticketsService } from '../services/TicketsService.js';
import { AppState } from '../AppState.js';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'


export default function EventDetails({ event, foundTicket }) {
    const addUserBtn = (
        <button className='btn bg-warning selectable me-4'
            onClick={createTicket}>
            <span className='d-flex align-items-center'>
                <div className='me-3 mb-1 fs-5'>
                    <FaUserPlus />
                </div>
                <div className='fs-4'>Attend Event</div>
            </span>
        </button>
    )
    const removeUserBtn = (
        <button className='btn bg-danger selectable me-4'
            onClick={returnTicket}>
            <span className='d-flex align-items-center'>
                <div className='me-3 mb-1 fs-5'>
                    <FaUserMinus />
                </div>
                <div className='fs-4'>Attend Event</div>
            </span>
        </button>
    )
    const soldOut = (
        <button disabled
            className='btn bg-secondary me-4'>
            SOLD OUT
        </button>
    )
    const cancelEventBtn = (
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
    )
    const emptyBtn = (
        <div className=''>
            <svg className="cancel">
            </svg>
        </div>
    )

    const zeroSpots = <b className='fs-2 pe-2 ms-3 text-danger'>0</b>
    const spots = <b className='fs-2 pe-2 ms-3 text-info'>{event.capacity}</b>
    const eventCanceled = <b className='fs-2 pe-2 ms-3 text-danger'>EVENT CANCELED</b>
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

    async function returnTicket() {
        try {
            const ticket = AppState.myTickets.find(t => t.eventId == event.id)
            await ticketsService.returnTicket(ticket.id, event.id)
        }
        catch (error) {
            Pop.error(error);
        }
    }


    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-12">
                    <div className='tower-box-shadow bg-card ms-3 img-fluid'
                        style={event.isCanceled ? { backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover', filter: 'grayscale(50%)' } : { backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover' }}>
                        <div className='bg-card'>
                            <div className="row">
                                <div className="col-4">
                                    <img className='img-fluid event-pic border m-3'
                                        src={event.coverImg} alt={event.name} />
                                </div>
                                <div className='col-8'>
                                    {event.creatorId == AppState.account?.id ? cancelEventBtn : emptyBtn}
                                    <div className="d-flex justify-content-between ms-3">
                                        <div>
                                            <div className="pb-3 fs-2">{event.name}</div>
                                            <div className="text-info">{event.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-info pb-3 text-end pe-3 me-4 fs-3">{event.date}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="event-body pt-3 mx-3">
                                            {event.description}
                                        </p>
                                    </div>
                                    {AppState.account !== null ?
                                        (<div className='pb-3 d-flex justify-content-between'>
                                            <div>
                                                {event.isCanceled ? eventCanceled : event.capacity <= 0 ? zeroSpots : spots}
                                                {event.isCanceled ? '' : 'Spots Left'}
                                            </div>
                                            <div>
                                                {event.capacity <= 0 && !foundTicket ? soldOut : foundTicket ? removeUserBtn : addUserBtn}
                                            </div>
                                        </div>) :
                                        (<div className='pb-3 d-flex justify-content-between'>
                                            <span>
                                                {event.isCanceled ? eventCanceled : event.capacity <= 0 ? zeroSpots : spots}
                                                {event.isCanceled ? '' : 'Spots Left'}
                                            </span>
                                            {event.capacity <= 0 ? soldOut : null}
                                        </div>)}
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
    event: PropTypes.object.isRequired,
    foundTicket: PropTypes.object
}