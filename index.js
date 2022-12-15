const APIURL =`https://api.themoviedb.org/3/discover/movie?
api_key=04c35731a5ee918f014970082a0088b1`;
const IMGPATH =`https://image.tmdb.org/t/p/w1280`;

const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?
api_key=04c35731a5ee918f014970082a0088b1&query=`;

const main =document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

getmovies(APIURL);

async function getmovies(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
}
function showMovies(movies){
    main.innerHTML="";
    movies.forEach(movie=> {
     const {poster_path,title,overview,vote_average}=movie;
     const movieEl=document.createElement("div")
     
    });
}