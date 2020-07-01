import React from 'react';
import {fetchData} from "../../actions/getMovies";
import {connect} from "react-redux";
import { StarRating } from "../stars-rating/StarRating";
import './MoviePreviewInfo.scss';

const PostPreviewComponent = (props) => {
    const { movieInfo } = props;
    const {vote_average} = movieInfo;

    return (
        <div className="card-block">
            <p className="card-text">{ movieInfo.overview }</p>
            <StarRating rating={vote_average}/>
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
