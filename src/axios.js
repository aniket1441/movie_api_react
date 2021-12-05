import axios from "axios";


// base url 
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
});


// it is basecully for appending other part of url to base url


export default instance;
