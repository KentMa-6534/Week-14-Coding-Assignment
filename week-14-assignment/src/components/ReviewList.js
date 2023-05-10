import React from "react";
import Stars from "./Stars";

const ReviewList = ({reviews}) => {
    return (
        <div className="review-list">
            <h3>Reviews:</h3>
            {reviews.length === 0 ? (
                <p>No reviews.</p>
            ):(
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewList;