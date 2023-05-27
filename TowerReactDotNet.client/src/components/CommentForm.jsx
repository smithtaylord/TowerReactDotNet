import React, { useState } from 'react';
import Pop from '../utils/Pop.js';
import { useParams } from 'react-router-dom';
import { commentsService } from '../services/CommentsService.js';

export default function CommentForm() {
    const { eventId } = useParams();
    const [comment, setComment] = useState('')
    const postComment = async (e) => {
        e.preventDefault()
        try {
            let formData = {}
            formData.body = comment
            formData.eventId = eventId
            await commentsService.postComment(formData)
            setComment('')
        }
        catch (error) {
            Pop.error(error);
        }
    }

    return (
        <div className="p-md-3">
            <form onSubmit={postComment}>
                <div className="mb-3 txt-area">
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        className="form-control txt-area p-2 bg-info"
                        placeholder='Tell us what you think...'
                        required
                        maxLength={300}></textarea>
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