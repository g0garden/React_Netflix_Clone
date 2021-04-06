// const API_KEY = "f1b3ce8e1384f5a32ac1bd0529a805f1";

const request = {
    fetchTrending: `/api/main/trend`,
    fetchActionMovies: `/api/main/movie/genre/28`,
    fetchFantasyMovies: `/api/main/movie/genre/14`,
    fetchComedyMovies: `/api/main/movie/genre/35`,
    fetchTVMovies: `/api/main/movie/genre/10770`,
    fetchThrillerMovies: `/api/main/movie/genre/53`,
    fetchScifiMovies: `/api/main/movie/genre/878`,
    fetchMysteryMovies: `/api/main/movie/genre/9648`,
    fetchAnimatedMovies: `/api/main/movie/genre/16`,
    fetchHorrorMovies: `/api/main/movie/genre/27`,
};

// fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//       fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//       fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//       fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//       fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
//       fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//       fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//       fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
//       fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//       fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//       fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//       fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

export default request;
