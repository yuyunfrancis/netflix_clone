const API_KEY= "fc52ea2139b23fe572c6f38536954673";


const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests;