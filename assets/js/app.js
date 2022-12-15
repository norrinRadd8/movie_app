var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches) {
    itemWrapper.innerHTML = ''
    for (var matchObj of matches) {
        itemWrapper.insertAdjacentHTML('beforeend', `
        <div class="movie-item" style="background-image: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
        url(${matchObj.image_url});">
            <h3>${matchObj.title}</h3>
            <p>${matchObj.description}</p>
            <a href="${matchObj.imdb_url}"
            target="_blank">View details</a>
        </div>
        `)
    }
}

function getMovieData(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase();

    if(keyCode === 13 && searchText) {
        var matches = []
        for(var movie of movieData) {
            if(movie.title.toLowerCase().includes(searchText)) {
                matches.push(movie)
            }
        }

         var responsePromise = fetch('https://www.omdbapi.com/?apikey=90192bc9&t=die%20hard')
        
         function handleResponse(responseObj) {
            return responseObj.json()
         }

         responsePromise
         .then(handleResponse)
         .then(function(data) {
            console.log(data)
         })
    //     responsePromise.then(function(responseObj) {
    //         var dataPromise = responseObj.json()

    //         dataPromise.then(function(data){
    //             console.log(data)
    //         })
    //     })
            
        

    //     displayMatches(matches)
    //     }
    // }
        }
    }

function init() {
    searchInput.addEventListener('keydown', getMovieData);
}

init();

// Grab HTML elements
// Get the input's value on enter key press
// Grab data related to user's search
// Inject the movie items into the DOM, based on user's search



















