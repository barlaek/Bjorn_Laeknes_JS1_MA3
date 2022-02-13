
// Question 2

const rawgUrl = "https://api.rawg.io/api/games?key=90e51fbf1ae9489988004fb271ebd1f0&dates=2019-09-01,2019-09-30&platforms=18,1,7";

const endpointContainer = document.querySelector(".endpoint");

async function getApi() {
    try {
        const response = await fetch(rawgUrl);

        const data = await response.json();
    
        // console.log(data);
    
        const games = data.results;

        endpointContainer.innerHTML = "";
        
        for (let i = 0; i < games.length; i++) {
            // console.log(games[i])
    
            if (i === 8) {
                break;
            }
    
            endpointContainer.innerHTML += 
                `<div class="the_endpoint">
                <h3>${games[i].name}</h3>
                <p>Rating: ${games[i].rating}</p>
                <p>Number of tags: ${games[i].tags.length}</p>
                </div>`
        }
    } catch (error) {
        console.log(error);
        endpointContainer.innerHTML = displayError("Oh boy! A Monkey stole the API");
    }

}

getApi();