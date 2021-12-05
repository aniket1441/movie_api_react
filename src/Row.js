import React, {useState , useEffect  } from 'react'
import axios from "./axios";
import "./Row.css";
import Modal from './Modal';
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl, isLargeRow}) {
   
   const [modal , setModal] = useState(false);
   const [movies , setMovies ] = useState([]); 
   const [movie_data, setMovieData ] = useState({
       original_title : "",
       backdrop_path : "",
       overview : "",
       imdb : ""   
   })
     
   useEffect(()=> {
    
   async function fetchData(){

       const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
       setMovies(request.data.results);
       return request;
   }

   fetchData();
   
   } , [fetchUrl]);

   
   return (
        <div className="row">
           <h2> { title } </h2>
        <div className="row_posters">
   { 
    
    movies.map( movie =>(
    <img
    key={movie.id}    
    className={`${isLargeRow ? "row_posterLarge" : "row_poster" }`}        
        src={`${baseUrl}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} 
        alt={movie.name}    onClick={( )=>{
            
            console.log(movie)
           
           if(modal=== true)
           {
                 if(movie.original_title === movie_data.original_title )
                  setModal(false)

           }
          else
            setModal(true);
              
            setMovieData({
                original_title : movie.original_title || movie?.name ,
                backdrop_path : movie.backdrop_path ,
                overview : movie.overview,
                imdb : movie.vote_average 
            })

            // navigate('/');
        }}  />
        )
            )
    }        

    </div>
        
        {modal && <Modal  movie_info = {movie_data}/>} 

        </div>
    )
}

export default Row
