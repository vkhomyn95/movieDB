import { API_KEY } from "../constants";

const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
const URL2 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export default () => {
    return fetch(URL2)
        .then(response => Promise.all([response, response.json()]))
}