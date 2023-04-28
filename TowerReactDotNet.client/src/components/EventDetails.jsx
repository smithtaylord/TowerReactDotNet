import React from 'react';
import PropTypes from 'prop-types'
import '../assets/scss/components/EventDetails.scss'

export default function EventDetails({ event }) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div
                        className='tower-box-shadow'
                        style={{ backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover' }}>
                        <div className='bg-card'>
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        className='img-fluid event-pic border'
                                        src={event.coverImg} alt={event.name} />
                                </div>
                                <div className='col-8'>
                                    <div className="d-flex justify-content-between ">
                                        <div>
                                            <h4 className="pb-3 fs-2">{event.name}</h4>
                                            <h4 className="text-info">{event.location}</h4>
                                        </div>
                                        <div>
                                            <h4 className="text-info pb-3 text-end pe-3 fs-3">{event.date}</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="event-body pt-3">
                                            {event.description}
                                        </p>
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