console.log('JS Loaded!');

document.addEventListener("DOMContentLoaded", function(event) { 
  
	document.getElementById("search").addEventListener("click", getMovies);


});

var getMovies = function (event){
	console.log('getting movies...');
	var base_url = 'http://www.omdbapi.com/?apikey=79b5fd91&';
	var search_input = document.getElementById("movie-search-input").value;
	var movie_api_url = base_url + 's=' + search_input

	fetch(movie_api_url).then(function(response) {
  			return response.json();
		}).then(function(movieData) {
		  console.log(movieData);
		  buildResultsList(movieData['Search']);
		});
}

var buildResultsList = function(movieResults){
		var movieList = document.getElementById('movie-results-list');
		movieList.innerHTML = '';

	movieResults.forEach(function(movie){
		
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(movie.Title + ' - ' + movie.Year));
		movieList.appendChild(li);
	});
}