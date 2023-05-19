import React from 'react';

export default function CommentForm() {

    return (

        <div className="p-3">
            <form>
                <div className="mb-3 txt-area">
                    <textarea
                        className="form-control txt-area p-2 bg-info"
                        placeholder='Tell us what you think...'></textarea>
                </div>
                <div className='text-end'>
                    <button className='btn bg-success'>
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    )

}