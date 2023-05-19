import React from 'react';
import PropTypes from 'prop-types'
import CommentForm from './CommentForm.jsx';

export default function Comments({ comments }) {
    let comment = comments.map(c => {
        return (
            <div key={c.id}>{c.body}</div>
        )
    })
    return (

        <>
            <div className='text-info fs-4 px-3 py-1'>Start the conversation</div>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-8 m-auto bg-secondary m-3 p-3  tower-box-shadow">
                        <CommentForm />
                        {comment}
                    </div>
                </div>
            </div>
        </>
    )

}

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}