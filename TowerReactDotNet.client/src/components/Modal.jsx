import React from 'react';
import PropTypes from 'prop-types'

export default function Modal(props) {

    return (

        <div className="Modal">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    {props.children}
                </div>
            </div>
        </div>
    )

}

Modal.propTypes = {
    children: PropTypes.object.isRequired
}