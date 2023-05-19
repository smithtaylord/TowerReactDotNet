import React, { useState } from 'react';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { useParams } from 'react-router-dom';

export default function CommentForm() {
    const { eventId } = useParams();
    const [comment, setComment] = useState('')
    const postComment = async (e) => {
        e.preventDefault()
        try {
            let formData = {}
            formData.body = comment
            formData.eventId = eventId
            logger.log(formData)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    return (

        <div className="p-3">
            <form onSubmit={postComment}>
                <div className="mb-3 txt-area">
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        className="form-control txt-area p-2 bg-info"
                        placeholder='Tell us what you think...'></textarea>
                </div>
                <div className='text-end'>
                    <button type='submit'
                        className='btn bg-success'>
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    )

}