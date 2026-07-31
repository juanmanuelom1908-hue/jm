async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  try {
    const weather = await getWeather(city);
    if (!weather) {
      alert("Something went wrong, please try again later");
      return;
    }

    document.getElementById("weather-icon").src = weather.weather[0]?.icon ?? "N/A";
    document.getElementById("main-temperature").textContent = weather.main?.temp ?? "N/A";
    document.getElementById("feels-like").textContent = weather.main?.feels_like ?? "N/A";
    document.getElementById("humidity").textContent = weather.main?.humidity ?? "N/A";
    document.getElementById("wind").textContent = weather.wind?.speed ?? "N/A";
    document.getElementById("wind-gust").textContent = weather.wind?.gust ?? "N/A";
    document.getElementById("weather-main").textContent = weather.weather[0]?.main ?? "N/A";
    document.getElementById("location").textContent = weather.name ?? "N/A";

  } catch {
    alert("Something went wrong, please try again later");
  }
}

const btn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");

btn.addEventListener("click", () => {
  const city = citySelect.value;
  
  if (!city) return;
  
  showWeather(city);
});