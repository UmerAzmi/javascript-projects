const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "b8feee9969a95bb686fdc9c6b88ca1f2";

weatherForm.addEventListener("submit", async event => {
  
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData) 
        }
        catch(error){
            console.error(error)
            displayError(error)
        }
    }
    else{
        displayError("<span class='errorEmoji'>⚠️</span> Please enter a city name");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch the data")
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    console.log(data)
    const {name: city, 
           main: {temp,humidity},
           weather: [{description,id}]} = data;
    card.textContent = '';
    card.style.display = 'flex';

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const emojiDisplay = document.createElement("p")

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('cityName');
    tempDisplay.classList.add('temp');
    humidityDisplay.classList.add("humidity");
    descDisplay.classList.add("weatherType");
    emojiDisplay.classList.add("emoji")

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(emojiDisplay)
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"
        case (weatherId >= 300 && weatherId < 400):
            return "💦"
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"
        case (weatherId >= 600 && weatherId < 700):
            return "🌨️"
        case (weatherId >= 700 && weatherId < 800):
            return "🌁"
        case (weatherId === 800):
            return "☀️"
        case (weatherId > 800 && weatherId < 810):
            return "🌥️"
        default:
            return "🤨"
    }
}

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.innerHTML = message;
    errorDisplay.classList.add("error")
    
    card.textContent = '';
    card.style.display = "flex"
    card.style.padding = 
    card.appendChild(errorDisplay)
}