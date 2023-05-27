import React from 'react';
import PropTypes from 'prop-types'

export default function Attendees({ attendees }) {

    let attendee = attendees.map(a => {
        return (
            <div className='col-4 col-sm-3 col-lg-2 col-xxl-1 p-0 py-1'
                key={a.id}>
                <img className='img-fluid rounded-circle prof-pic'
                    src={a.account.picture}
                    alt={a.account.name}
                    title={a.account.name} />
            </div>
        )
    })

    return (
        <>
            <div className='text-info fs-4 px-3 py-1'>See who is attending</div>
            <div className="container-fluid">
                <div className="row bg-secondary m-3 p-3  tower-box-shadow">
                    {attendees.length == 0 ? 'No Attendees yet. Maybe you will be the first?' : attendee}

                </div>
            </div>
        </>
    )

}

Attendees.propTypes = {
    attendees: PropTypes.array.isRequired
}