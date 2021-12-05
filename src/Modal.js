import React from 'react'
import './Modal.css'
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Modal = ({movie_info}) => {
    return (
        <div className="modal">
                 <img   src={`${baseUrl}${movie_info.backdrop_path}`}  alt={movie_info.original_title} />   
             
             <div className="movie_data">
                  <div className="name_"> {movie_info.original_title}</div>
                   <div className="imdb" >imdb : {movie_info.imdb}</div>
                    <div className="overview"> overview : {movie_info.overview}</div>
             </div>

        </div> 
    )
}

export default Modal;
