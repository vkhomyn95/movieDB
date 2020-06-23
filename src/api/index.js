const URL = 'https://api.themoviedb.org/3/movie/550?api_key=9a8a06692b935dc7b15549dc37174129';
export default () => {
    return fetch(URL)
        .then(response => Promise.all([response, response.json()]))
}