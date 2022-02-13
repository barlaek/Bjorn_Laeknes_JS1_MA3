// Question 1

const getRemainder = (a, b) => a % b; 

// Putting the results into const for more readability
const result = getRemainder(6, 3);

// Logging results
console.log(result);

// Question 2

const rawgUrl = "https://api.rawg.io/api/games?key=90e51fbf1ae9489988004fb271ebd1f0&dates=2019-09-01,2019-09-30&platforms=18,1,7";

const endpointContainer = document.querySelector(".endpoint");

async function getApi() {
    const response = await fetch(rawgUrl);

    const games = await response.json();

    console.log(games);

    const allGames = games.results;

    for (let i = 0; i < allGames.length; i++) {
        console.log(allGames[i])

        if (i === 8) {
            break;
        }

        endpointContainer.innerHTML += `<div class="the_endpoint">${allGames[i].name}</div>`
    }

}

getApi();