// import React, {useEffect} from 'react';
// // import { getMovies } from "../../actions/getMovies";
// import { connect } from 'react-redux';
// const MoviesList = (props) => {
//     useEffect(() => {
//         const { movies } = this.props;
//         if (!movies.length) {
//             this.props.getMovies && this.props.getMovies();
//         }
//     });
//     const { movies } = this.props;
//     return (
//
//         <div>
//             {
//                 movies.map((item) => {
//
//                 })
//             }
//         </div>
//     );
// };
// const mapStateToProps = (store) => {
//     const {moviesReducer } = store;
//     return {
//         movies: moviesReducer.movies
//     }
// };
// const mapDispatchToProps = ({
//     getMovies
// });
// export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);