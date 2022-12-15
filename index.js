const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const results = document.getElementById('results');
const apiKey = 'your_api_key';
form1.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = `
      <h2>${data.Title}</h2>
     <p>${data.Year}</p>
      <p>${data.Director}</p> 
      <p>${data.Actors}</p>`;
    });
});
form2.addEventListener('submit', (event) => {
  event.preventDefault();
  const actor = document.getElementById('actor').value;
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${actor}`)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = `<h2>${data.Search[0].Title}</h2> <p>${data.Search[0].Year}</p> <p>${data.Search[0].Director}</p> <p>${data.Search[0].Actors}</p>`;
    });
});
form3.addEventListener('submit', (event) => {
  event.preventDefault();
  const director = document.getElementById('director').value;
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${director}`)
  .then((response) => response.json())
  .then((data) => {
    results.innerHTML = `<h2>${data.Search[0].Title}</h2> <p>${data.Search[0].Year}</p> <p>${data.Search[0].Director}</p> <p>${data.Search[0].Actors}</p>`;
  });
});









