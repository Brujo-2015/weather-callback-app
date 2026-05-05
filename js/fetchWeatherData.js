const elements = {
  city: document.getElementById("city"),
  apiKey: document.getElementById("apiKey"),
  demoMode: document.getElementById("demoMode"),
  form: document.getElementById("weatherForm"),
  weatherContainer: document.getElementById("weatherContainer"),
  locationName: document.getElementById("locationName"),
  statusBadge: document.getElementById("statusBadge"),
  temperature: document.getElementById("temperature"),
  feelsLike: document.getElementById("feelsLike"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
};

const demoWeatherData = {
  Boston: {
    name: "Boston",
    sys: { country: "US" },
    weather: [{ main: "Clouds", description: "scattered clouds" }],
    main: { temp: 281.15, feels_like: 278.9, humidity: 72 },
    wind: { speed: 4.6 },
  },
  "Mexico City": {
    name: "Mexico City",
    sys: { country: "MX" },
    weather: [{ main: "Clear", description: "clear sky" }],
    main: { temp: 296.15, feels_like: 295.3, humidity: 42 },
    wind: { speed: 2.8 },
  },
  London: {
    name: "London",
    sys: { country: "GB" },
    weather: [{ main: "Rain", description: "light rain" }],
    main: { temp: 286.15, feels_like: 285.1, humidity: 81 },
    wind: { speed: 5.1 },
  },
};

function setStatus(message, type = "idle") {
  elements.statusBadge.textContent = message;
  elements.statusBadge.className = `status-badge ${type}`;
}

function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function metersPerSecondToKmPerHour(speed) {
  return Math.round(speed * 3.6);
}

function clearMetrics() {
  elements.temperature.textContent = "—";
  elements.feelsLike.textContent = "—";
  elements.humidity.textContent = "—";
  elements.wind.textContent = "—";
}

function getDemoWeatherData(city) {
  return demoWeatherData[city] || {
    ...demoWeatherData.Boston,
    name: city,
    weather: [{ main: "Demo", description: "demo weather conditions" }],
  };
}

// Callback-based function that fetches weather data asynchronously.
function fetchAndSetWeatherData(city, callback) {
  const apiKey = elements.apiKey.value.trim();
  const useDemoMode = elements.demoMode.checked;

  if (!city) {
    throw new Error("Please enter a city name.");
  }

  if (useDemoMode) {
    setTimeout(() => {
      callback(getDemoWeatherData(city));
    }, 500);
    return;
  }

  if (!apiKey) {
    throw new Error("Please enter an OpenWeather API key or enable demo mode.");
  }

  localStorage.setItem("openWeatherApiKey", apiKey);

  const encodedCity = encodeURIComponent(city);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found or API request failed.");
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => displayError(error.message));
}

// Callback function that receives data and updates the UI.
function displayWeatherData(data) {
  const weatherDescription = data.weather?.[0]?.description || "weather data unavailable";
  const cityLabel = data.sys?.country ? `${data.name}, ${data.sys.country}` : data.name;
  const temperature = kelvinToCelsius(data.main.temp);
  const feelsLike = kelvinToCelsius(data.main.feels_like);
  const wind = metersPerSecondToKmPerHour(data.wind.speed);

  elements.locationName.textContent = cityLabel;
  elements.weatherContainer.textContent = `Current conditions in ${cityLabel}: ${weatherDescription}.`;
  elements.temperature.textContent = `${temperature}°C`;
  elements.feelsLike.textContent = `${feelsLike}°C`;
  elements.humidity.textContent = `${data.main.humidity}%`;
  elements.wind.textContent = `${wind} km/h`;
  setStatus("Loaded", "loaded");
}

function displayError(message) {
  elements.locationName.textContent = "Unable to load weather";
  elements.weatherContainer.textContent = message;
  clearMetrics();
  setStatus("Error", "error");
}

function getWeatherData() {
  const city = elements.city.value.trim();

  elements.weatherContainer.textContent = "Loading weather data...";
  elements.locationName.textContent = "Searching...";
  clearMetrics();
  setStatus("Loading", "loading");

  try {
    fetchAndSetWeatherData(city, displayWeatherData);
  } catch (error) {
    displayError(error.message);
  }
}

function restoreSavedApiKey() {
  const savedKey = localStorage.getItem("openWeatherApiKey");
  if (savedKey) {
    elements.apiKey.value = savedKey;
  }
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherData();
});

restoreSavedApiKey();
