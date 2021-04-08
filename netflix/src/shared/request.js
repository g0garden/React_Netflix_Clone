const API_KEY = "f1b3ce8e1384f5a32ac1bd0529a805f1";
// api/main/database 로 먼저 접근해야함.

const request = {
  fetchKey: `/api/main/movie/video`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ko&with_networks=213`,
  fetchTrendingTMDB: `/trending/all/week?api_key=${API_KEY}&language=ko`,
  fetchTopRatedTMDB: `/movie/top_rated?api_key=${API_KEY}&language=ko`,

  fetchActionMovies: `/api/main/movie/genre/28`,
  fetchFantasyMovies: `/api/main/movie/genre/14`,
  fetchComedyMovies: `/api/main/movie/genre/35`,
  fetchTVMovies: `/api/main/movie/genre/10770`,
  fetchThrillerMovies: `/api/main/movie/genre/53`,
  fetchScifiMovies: `/api/main/movie/genre/878`,

  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

  fetchAnimatedMovies: `/api/main/movie/genre/16`,
  fetchHorrorMovies: `/api/main/movie/genre/27`,

  fetchDocumentaryMovies: `/api/main/movie/genre/99`,
  fetchDramaMovies: `/api/main/movie/genre/18`,
  fetchFamilyMovies: `/api/main/movie/genre/10751`,
  fetchHistoryMovies: `/api/main/movie/genre/36`,
  fetchWarMovies: `/api/main/movie/genre/10752`,
  fetchCrimeMovies: `/api/main/movie/genre/80`,

  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,

  fetchRomanceMovies: `/api/main/movie/genre/10749`,
  fetchWesternMovies: `/api/main/movie/genre/37`,
  fetchAdventureMovies: `/api/main/movie/genre/12`,

  //   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  //   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default request;
