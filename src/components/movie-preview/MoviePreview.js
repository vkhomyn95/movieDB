import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchData} from "../../actions/getMovies";


class PostPreviewComponent extends Component {
    componentDidMount() {
        console.log('PostPreview componentWillUnmount');
        this.props.fetchData();
        debugger
    }
    getMoviesList () {
        const { movies } = this.props;
        console.log("====================");
        console.log("this props movies ", movies)
        debugger
        return movies.movies.map((movie, key) => {
            return <div key={key}>{movie.id}</div>
        })
    }


    render() {
        console.log(this.props);
        const { movies } = this.props;
        console.log(movies);
        return (
            <div className="ef">
                {this.props.movies.isFetching && <div> Loading </div>}
                {
                    this.props.movies.data.length ?
                        this.getMoviesList()
                        : null
                }
            </div>
        );
    }
}

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

export const MoviePreview = connect(mapStateToProps, mapDispatchToProps)(PostPreviewComponent);