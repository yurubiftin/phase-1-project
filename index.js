//This code is for a movie search application that retrieves data from the movie database API.

// It displays the movies on the page and allows the user to search for specific movies by title.

//The APIURL and SEARCHAPI constants store the base URLs for the API calls.The IMGPATH constant
//stores the base URL for the movie poster images.

const APIURL =`https://api.themoviedb.org/3/discover/movie?
api_key=04c35731a5ee918f014970082a0088b1`;
const IMGPATH =`https://image.tmdb.org/t/p/w1280`;

const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?
api_key=04c35731a5ee918f014970082a0088b1&query=`;

//The main ,form and search variables store DOM elements for later use

const main =document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// The getmovies function is an async function that retrieves movie data from
// the API using the provided URL.it then calls the showmovies function to display the movies on page
getmovies(APIURL);

async function getmovies(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
}


// The showMovies function takes in an array of movies and creates a div element for each movie.
// It displays the movie poster,title and vote average.It also adds a class to the vote average
// based on its value using the getClassByRate function.

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


// The getClassByRate function takes in a vote average and returns a class name based 
// on the value of the vote average.

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

//   The form event listener listens for a submit event and calls the searchMovies function when it
//   occurs.It prevents the default form behavior and retrieves the search term from the search Input
//   It then calls the searchMovies function with the search term appended to the SEARCHAPI URL.Finally
//   it clears the search input value.

form.addEventListener("submit", e =>{
    e.preventDefault();
    const searchTerm= search.value;
    searchMovies(SEARCHAPI + searchTerm);
    search.value ="";
})
