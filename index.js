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
     movieEl.className='movie-info'
    movieEl.classList.add("movie");
    movieEl.innerHTML=`
        <img src="${IMGPATH}${poster_path}"alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div> 
    `;
    main.appendChild(movieEl);
    });
}

function getClassByRate(vote){
    if(vote >=8){
        return"green";
    }else if(vote >=5){
        return"orange";
    }else{
        return"red";
    }
}

function searchMovies(url) {
    // Fetch the movie data from the API using the provided URL
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // When the data is received, show the movies using the showMovies function
        showMovies(data.results);
      });
  }
form.addEventListener("submit", e =>{
    e.preventDefault();
    const searchTerm= search.value;
    searchMovies(SEARCHAPI + searchTerm);
    search.value ="";
})
