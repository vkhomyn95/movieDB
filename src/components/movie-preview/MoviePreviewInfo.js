import React from 'react';
import {fetchData} from "../../actions/getMovies";
import {connect} from "react-redux";

const PostPreviewComponent = (props) => {
    const { movieInfo, genres } = props;

    // const genresId = movieInfo.genre_ids.filter(id => !genres.genres.id.includes(id));
    // console.log(genresId)
    // if (!genres) return null;
    // if (!movies) return null;
    return (
        <div className="card-block">
            <h4 className="card-title">{ movieInfo.title } </h4>
            <p className="card-text">{ movieInfo.overview }</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        movies: state.dataReducer
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
};

export const MoviePreviewInfo = connect(mapStateToProps, mapDispatchToProps)(PostPreviewComponent);
