var button = document.querySelector("#movie-submit")
button.addEventListener("click",handleClick)
function handleClick(){
    // alert("Button is clicked");
    var movie_url = document.getElementById("image-url").value
    var movie_name = document.getElementById("movie-name").value
    var movie_rating = document.getElementById("movie-rating").value

    var card_div = document.getElementById("card-div")
    card_div.innerHTML += `
                <div class="card">
                    <img src="${movie_url}" alt="">
                    <p>Movie : ${movie_name}</p>
                    <h3>${movie_rating}</h3>
                </div>
    `
    
    console.log(movie_name)
}