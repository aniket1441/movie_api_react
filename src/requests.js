
const requests = {
    
 fetchTrending : '/trending/all/week?api_key=cd510ecb85ddac8813f94722c771047d&language=en-Us',  
 fetchNetflixOriginals : '/discover/tv?api_key=cd510ecb85ddac8813f94722c771047d&with_networks=213',
 fetchTopRated : '/movie/top_rated?api_key=cd510ecb85ddac8813f94722c771047d&language=en-Us',
 fetchActionMovies :'/discover/movie?api_key=cd510ecb85ddac8813f94722c771047d&with_genres=28',
 fetchComedyMovies :'/discover/movie?api_key=cd510ecb85ddac8813f94722c771047d&with_genres=35',
 fetchHorrorMovies :'/discover/movie?api_key=cd510ecb85ddac8813f94722c771047d&with_genres=27',
 fetchRomanceMovies : '/discover/movie?api_key=cd510ecb85ddac8813f94722c771047d&with_genres=10749',
 fetchDocumentries : '/discover/movie?api_key=cd510ecb85ddac8813f94722c771047d&with_genres=99',
}

export default requests;


