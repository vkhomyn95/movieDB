import React from 'react';
import { PosterPreview } from "../poster-preview/PosterPreview";

export const MovieListCard = (props) => {
    const { movies } = props;
    if (!movies) return null;
    return (
        <div className="row">
            {
                movies.map(movie => (
                    <div className="col-sm-3" key={movie.id}>
                        <div className="card">
                            <PosterPreview poster_path={movie.poster_path} key={movie.id}/>
                            <div className="card-block">
                                <h4 className="card-title">{ movie.title } </h4>
                                <p className="card-text">{ movie.overview }</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};