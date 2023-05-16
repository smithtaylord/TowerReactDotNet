import React from 'react';
import PropTypes from 'prop-types'

export default function Comments({ comments }) {
    let comment = 
    return (

        <>
            <div className='text-info fs-4 px-3 py-1'>Start the conversation</div>
            <div className="container-fluid">
                <div className="row bg-secondary m-3 p-3  tower-box-shadow">


                </div>
            </div>
        </>
    )

}

Comments.propTypes = {
    comments: PropTypes.object.isRequired
}