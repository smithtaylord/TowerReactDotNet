import React from 'react';
import PropTypes from 'prop-types'

export default function Modal(props) {
    const { target, children } = props;
    return (

        <div className="Modal">
            <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    {children}
                </div>
            </div>
        </div>
    )

}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    target: PropTypes.string.isRequired
}