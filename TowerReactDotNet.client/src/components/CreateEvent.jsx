import React, { useState } from 'react';
import { BindEditable } from '../utils/FormHandler.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';
import { useNavigate } from 'react-router-dom';



export default function CreateEvent() {
    const editable = ({})
    const bindEditable = BindEditable(editable)
    const navigate = useNavigate();
    const formRef = React.useRef(null)



    async function handleSubmit() {
        try {
            window.event?.preventDefault()
            logger.log({ editable })
            await eventsService.createEvent(editable)
            navigate(`/event/${AppState.activeEvent.id}`)
            // @ts-ignore
            formRef.current.reset()
        }
        catch (error) {
            Pop.error(error);
        }
    }
    return (


        <div className="modal-content bg-dark">
            <div className="bg-secondary text-info rounded-top p-3 d-flex justify-content-between mb-3">
                <div> </div>
                <h1 className="modal-title fs-3" id="createEventModalLabel">Create Event</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form
                onSubmit={handleSubmit}
                ref={formRef}>
                <div className="modal-body bg-dark px-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='name'
                                    name='name'
                                    onChange={bindEditable} />
                                <span>Name</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='coverImg'
                                    name='coverImg'
                                    onChange={bindEditable} />
                                <span>Cover Image</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='location'
                                    name='location'
                                    onChange={bindEditable} />
                                <span>Location</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="date"
                                    id='startDate'
                                    name='startDate'
                                    onChange={bindEditable} />
                                <span>Date</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="number"
                                    id='capacity'
                                    name='capacity'
                                    onChange={bindEditable} />
                                <span>Capacity</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={`select-container ${editable.type == '' ? 'selected' : ''}`}>
                                <select
                                    id="event-type-select"
                                    className="selectbox"
                                    aria-label="Event Type"
                                    name='type'
                                    defaultValue=''
                                    onChange={bindEditable}>
                                    <option value="" disabled>Event Type</option>
                                    <option value="concert">Concert</option>
                                    <option value="convention">Convention</option>
                                    <option value="sport">Sport</option>
                                    <option value="digital">Digital</option>
                                    <option value="misc.">Mics.</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='description'
                                    name='description'
                                    onChange={bindEditable} />
                                <span>Event Description</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3 pb-4 text-end">
                    {/* <button type="button" className="selectable btn bg-secondary me-3" data-bs-dismiss="modal">Close</button> */}
                    <button
                        type="submit"
                        className="selectable btn bg-success me-3 tower-box-shadow"
                        data-bs-dismiss="modal">Save changes</button>
                </div>
            </form>
        </div >

    )

}