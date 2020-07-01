import React from 'react';
import './GenreBadge.scss'
import 'font-awesome/css/font-awesome.min.css';

export const GenreBadge = (props) => {
    const { genres } = props;
    if (!genres || genres.every(value => value === undefined)) return null;
    return (
        <div className="genre-info-block">
            <i className="fa fa-film"></i>
            {
                genres.map(genre => (
                    <span key={genre.id}> {genre.name}, </span>
                ))
            }
        </div>
    );
};