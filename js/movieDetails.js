function getMovie(){
let getMovieId = sessionStorage.getItem("movieId");

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://www.omdbapi.com/?apikey=be2d2c72&i=${getMovieId}`);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200){
                let movie = JSON.parse(xhr.responseText);
                                
                let output = `
                <div class="row">
                  <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail">
                  </div>
                  <div class="col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                      <li class="list-group-item"><strong>Genere: </strong> ${movie.Genre}</li>
                      <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
                      <li class="list-group-item"><strong>IMDB Rating: </strong> ${movie.imdbRating}</li>
                      <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
                      <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
                      <li class="list-group-item"><strong>Actors: </strong> ${movie.Actors}</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                   <div class="well">
                   <h3>Plot</h3>
                   ${movie.Plot}
                   <hr>
                   <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                   <a href="index.html" class="btn btn-danger">Go back</a>
                </div>
                `
                document.getElementById("movies").innerHTML = output;
            }
        }
        xhr.onerror = () => {
            console.log("something bad happend!!")
        }
    }
    
    getMovie();
