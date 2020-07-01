import React from 'react';
import './StarRating.scss';
import 'font-awesome/css/font-awesome.min.css';

export const StarRating = (props) => {
    const {rating} = props;
    const rtg = rating/2;
    console.log(rating, rtg)

    function getStars(rating) {
        rating = Math.round(rating * 2) / 2;
        let output = [];
        for (var i = rating; i >= 1; i--)
            output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
        if (i === .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
        for (let i = (5 - rating); i >= 1; i--)
            output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

        return output.join('');

    }

    return (
        <div dangerouslySetInnerHTML={{ __html: getStars(rtg) }}/>
    );
};
