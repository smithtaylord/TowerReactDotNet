import React from 'react';

export default function EditEvent() {

    return (
        <div className="modal-content bg-dark">
            <div className="bg-secondary text-info rounded-top p-3 d-flex justify-content-between mb-3">
                <div> </div>
                <h1 className="modal-title fs-3" id="createEventModalLabel">Edit Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
                <div className="modal-body bg-dark px-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='name'
                                    name='name' />
                                <span>Name</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputbox w-100 mb-3">
                                <input
                                    required
                                    type="text"
                                    id='picture'
                                    name='picture' />
                                <span>Profile Picture</span>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-3 text-end">
                        {/* <button type="button" className="selectable btn bg-secondary me-3" data-bs-dismiss="modal">Close</button> */}
                        <button
                            type="submit"
                            className="selectable btn bg-success me-3 tower-box-shadow"
                            data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </form>
        </div >
    )

}