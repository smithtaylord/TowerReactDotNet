import React from 'react';
import PropTypes from 'prop-types'
import '../assets/scss/components/EventDetails.scss'

export default function EventDetails({ event }) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className='tower-box-shadow'
                        style={{ backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover' }}>
                        <div className='bg-card'>
                            <div className="row">
                                <div className="col-4">
                                    <img className='img-fluid event-pic border'
                                        src={event.coverImg} alt={event.name} />
                                </div>
                                <div className='col-8'>
                                    <div className="d-flex justify-content-between ">
                                        <div>
                                            <div className="pb-3 fs-2">{event.name}</div>
                                            <div className="text-info">{event.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-info pb-3 text-end pe-3 fs-3">{event.date}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="event-body pt-3">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div>
                                        <span>
                                            <b className='fs-2 pe-2 text-info'>
                                                {event.capacity}
                                            </b>Spots Left
                                        </span>
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