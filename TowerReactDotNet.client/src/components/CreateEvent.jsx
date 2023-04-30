import React, { useState } from 'react';

export default function CreateEvent() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (


        <div className="modal-content bg-dark">
            <div className="bg-secondary text-info rounded-top p-3 d-flex justify-content-between mb-3">
                <div> </div>
                <h1 className="modal-title fs-3" id="createEventModalLabel">Create Event</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-dark px-4">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input required type="text" />
                                <span>Name</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input required type="text" />
                                <span>Cover Image</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input required type="text" />
                                <span>Location</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input required type="date" />
                                <span>Date</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input required type="number" />
                                <span>Capacity</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={`select-container ${selectedValue != '' ? 'selected' : ''}`}>
                                <select id="event-type-select" className="selectbox" aria-label="Event Type" value={selectedValue} onChange={handleSelectChange}>
                                    <option value="" disabled>Event Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                {/* <label className={selectedValue == '' ? 'd-none' : ''}>Event Type</label> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="inputbox w-100 mb-3">
                                <input required type="text" />
                                <span>Event Description</span>
                                <i></i>
                            </div>
                        </div>

                    </div>


                </form>


            </div>
            <div className="px-3 pb-4 text-end">
                {/* <button type="button" className="selectable btn bg-secondary me-3" data-bs-dismiss="modal">Close</button> */}
                <button type="button" className="selectable btn bg-success me-3 tower-box-shadow">Save changes</button>
            </div>
        </div>

    )

}