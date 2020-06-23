import React from 'react';

const MovieListCard = (props) => {
    const { movies = []  } = props;
    return (
        <div>
            {
                movies.map((movie) => (
                    <li>{movie.overview}</li>
                ))
            }
        </div>
    );
};

export default MovieListCard;