const apiKey = "01410f1b87c6e8b86ab5315117abc595";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var result = await response.json();
    console.log(result) 


    //Asigning the values to each of the elements
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp)+"°C";
    document.querySelector(".cityName").innerHTML = result.name;
    document.querySelector(".humidity").innerHTML = result.main.humidity +"%";
    document.querySelector(".wind").innerHTML = result.wind.speed+" km/h";

    //Checking for the weather image and change according to the cities entered
    if(result.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if(result.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if(result.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } else if(result.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    } else if(result.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    } else {
        weatherIcon.src = "images/snow.png"
    }

    //display the weather information
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}
//Add an event listener to the button
searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);    
})



