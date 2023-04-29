import React from 'react';

export default function CreateEvent() {

    return (


        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="createEventModalLabel">Create Event</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Create Event!
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
        </div>

    )

}