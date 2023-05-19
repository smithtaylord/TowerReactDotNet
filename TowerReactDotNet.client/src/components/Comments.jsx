import React from 'react';
import PropTypes from 'prop-types'
import CommentForm from './CommentForm.jsx';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { commentsService } from '../services/CommentsService.js';

export default function Comments({ comments }) {

    const deleteComment = async (commentId) => {
        try {
            if (await Pop.confirm('Are you sure you want to delete your comment?'))
                await commentsService.deleteComment(commentId)
            Pop.toast('Comment Has Been Deleted', 'success', 'top-end')
        }
        catch (error) {
            Pop.error(error);
        }
    }
    let comment = comments.map(c => {
        return (
            <div key={c.id} className='container-fluid'>
                <div className="row">
                    <div className="col-2">
                        <div className='text-center mb-4'>
                            <img
                                className='img-fluid rounded-circle prof-pic'
                                src={c.creator.picture}
                                alt={c.creator.name} />
                        </div>
                    </div>
                    <div className="col-10">
                        <section className='bg-info mb-4 p-3 rounded tower-box-shadow'>
                            <div className='d-flex justify-content-between'>
                                <div className='text-dark fs-6 fw-bold'>{c.creator.name}</div>
                                <div>
                                    <button onClick={() => deleteComment(c.id)}>delete comment</button>
                                </div>
                            </div>
                            <div>{c.body}</div>
                        </section>
                    </div>
                </div>
            </div>
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