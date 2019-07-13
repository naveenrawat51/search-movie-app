document.getElementById("searchText").addEventListener("keyup", function(e) {
  let searchTextValue = document.getElementById("searchText").value;
  if (e.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://www.omdbapi.com/?apikey=be2d2c72&s=${searchTextValue}`,
      true );
    xhr.send();
    xhr.onload = function() {
      if (xhr.status === 200) {
        
        let output = "";
        console.log(JSON.parse(xhr.responseText));
        let data = JSON.parse(xhr.responseText);
        if(data.Error) {
            output += `<h3 class="text-center">No Record Found</h3>`;
      }else {
        data.Search.forEach((element) => {
          output += `
                       <div class="col-md-3">
                           <div class="well text-center">
                               <img src="${element.Poster}">
                               <h5>${element.Title}</h5>
                               <a onclick="movieSelected('${element.imdbID}')" class="btn btn-primary" >Movie Details</a>
                           </div>
                       </div>
                       `;
        });
    }
        document.getElementById("movies").innerHTML = output;
      }
    };
    
  }
});

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";

  return false;
}
