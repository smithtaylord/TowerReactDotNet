import React from 'react';

export default function CreateEvent() {

    return (


        <div className="modal-content bg-dark">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="createEventModalLabel">Create Event</h1>
                <div className="selectable text-light fs-3" data-bs-dismiss="modal" aria-label="Close">&times;</div>
            </div>
            <div className="modal-body bg-dark">
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
                            <div className="inputbox w-100 mb-3">
                                <input required type="text" />
                                <span>Event Type</span>
                                <i></i>
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
            <div className="modal-footer">
                <button type="button" className="selectable btn bg-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="selectable btn bg-success">Save changes</button>
            </div>
        </div>

    )

}