const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');



async function checkWeather(city){
    const api_key =  "715cf64bebb18c16fa23757d55c8bb59";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json()); 
    if(weather_data.cod ===`404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML =`${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML =`${weather_data.weather[0].description}`;

    humidity.innerHTML =`${weather_data.main.humidity}%`;
    wind_speed.innerHTML =`${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assest/sun with clouds.jpeg";
            break;
        case 'Clear': 
            weather_img.src = "/assest/clear.jpeg";
             break;
        case 'Rain':
            weather_img.src = "/assest/rain.jpeg";
             break;
        case 'Mist':
            weather_img.src = "/assest/mist.jpeg"; 
             break;
        case 'Thunderstorm':
            weather_img.src= "/assest/thunderstrom.jpeg" ; 
             break;         
    }





    
    console.log(weather_data);

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});