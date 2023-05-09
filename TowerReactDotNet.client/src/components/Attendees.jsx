import React from 'react';
import PropTypes from 'prop-types'

export default function Attendees({ attendees }) {

    let attendee = attendees.map(a => {
        return (
            <div className='col-1'
                key={a.id}>
                <img className='img-fluid rounded-circle selectable'
                    src={a.account.picture}
                    alt={a.account.name}
                    title={a.account.name} />
            </div>
        )
    })

    return (

        <div className="container-fluid">
            <div className="row bg-secondary m-3 p-3  tower-box-shadow">
                {attendee}
            </div>
        </div>
    )

}

Attendees.propTypes = {
    attendees: PropTypes.array.isRequired
}