import React from 'react';

const Stars = ({rating, onRatingChange}) => {
    const handleClick = (newRating) => {
        onRatingChange(newRating);
    };
    const renderStars = () => {
        const stars = [];
        for (let i =1; i<=5; i++) {
            const starClassName = i <= rating ? 'star active' : 'star';
            stars.push(
                <span
                 key={i}
                 className={starClassName}
                 onClick={() => handleClick(i)}
                >
                    ★
                </span>
            );
        }
        return stars;
    }
    return <div className='stars'>{renderStars()}</div>
}

export default Stars;