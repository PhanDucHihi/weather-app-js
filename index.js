const api_key = "7894dad21b70e3f902d9d24f34e2a141";

async function fetchData() {
  try{
    const cityName = document.getElementById("input-name").value;
    if(cityName.trim()===""){
      return 0;
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`);
    const data = await response.json();

    const locationElement = document.getElementById("location");
    const tempElement = document.getElementById("temp");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");

    locationElement.innerHTML = data.name;
    tempElement.innerHTML = data.main.temp + " °c";
    humidityElement.innerHTML = data.main.humidity + " %";
    windElement.innerHTML = data.wind.speed + " km/h";

    const imageConditionElement = document.getElementById("image-condition");

    if(data.weather[0].icon === "01d" || data.weather[0].icon ==="01n"){
      imageConditionElement.src = "Assets/clear.png";
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon ==="02n"){
      imageConditionElement.src = "Assets/cloud.png";
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon ==="03n"){
      imageConditionElement.src = "Assets/drizzle.png";
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon ==="04n"){
      imageConditionElement.src = "Assets/drizzle.png";
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon ==="09n"){
      imageConditionElement.src = "Assets/rain.png";
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon ==="10n"){
      imageConditionElement.src = "Assets/rain.png";
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon ==="13n"){
      imageConditionElement.src = "Assets/snow.png";
    }
    else{
      imageConditionElement.src = "Assets/clear.png";
    }
    

  }
  catch(error){
    alert("Location doesn't exist");
  }
}