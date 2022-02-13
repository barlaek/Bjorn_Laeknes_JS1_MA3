
// Question 2

const rawgUrl = "https://api.rawg.io/api/games?key=90e51fbf1ae9489988004fb271ebd1f0&dates=2019-09-01,2019-09-30&platforms=18,1,7";

const endpointContainer = document.querySelector(".endpoint");

async function getApi() {
    try {
        const response = await fetch(rawgUrl);

        const data = await response.json();
    
        // console.log(data);
    
        const games = data.results;
        
        for (let i = 0; i < games.length; i++) {
            // console.log(games[i])
    
            if (i === 8) {
                break;
            }
    
            endpointContainer.innerHTML += 
                `<div class="the_endpoint">${games[i].name}
                
                Rating: ${games[i].rating}
    
                Number of tags: ${games[i].tags.length}
                </div>`
        }
    } catch (error) {
        console.log(error);
        endpointContainer.innerHTML = error
    }

}

getApi();