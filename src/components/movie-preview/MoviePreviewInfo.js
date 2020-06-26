import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchData} from "../../actions/getMovies";


class PostPreviewComponent extends Component {
    componentDidMount() {
        console.log('PostPreview componentWillUnmount');
        this.props.fetchData();
    }
    getMoviesList () {
        const { movies } = this.props;
        console.log("====================");
        console.log("this props movies ", movies);

        return movies.data.map((movie, key) => {
            return <div key={key}>{movie.id}</div>
        })
    }


    render() {
        console.log(this.props);
        const { movies } = this.props;
        console.log(movies);
        return (
            <div className="container" ref={this.container}>
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

export const MoviePreviewInfo = connect(mapStateToProps, mapDispatchToProps)(PostPreviewComponent);