import React from 'react';

export const GenreBadge = (props) => {
    const { genres } = props;
    if (!genres || genres.every(value => value === undefined)) return null;
    console.log(genres)
    return (
        <div>
            {
                genres.map(genre => (
                    <li key={genre.id}> {genre.name}</li>
                ))
            }
        </div>
    );
};