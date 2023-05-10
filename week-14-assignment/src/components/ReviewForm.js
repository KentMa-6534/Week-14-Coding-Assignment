import React, {useState} from 'react';

const ReviewForm = ({addReview}) => {
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(review.trim() !== ''){
            addReview(review);
            setReview('');
        }
    };

    return(
        <form onSubmit={handleSubmit} className='review-form'>
            <h3>Add a Review:</h3>
            <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder='Write your review here...'
            ></textarea>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;