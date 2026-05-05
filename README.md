# Weather Callback App

## Overview

Weather Callback App is a front-end JavaScript project that demonstrates how callback functions can be used to handle asynchronous API operations. The application fetches current weather data, processes the API response, and renders a clean weather summary in the browser.

The project was adapted from a learning exercise into a portfolio-ready application with improved structure, user experience, error handling, and documentation.

## Live Demo

Add your GitHub Pages link here after deployment:

```text
https://brujo-2015.github.io/weather-callback-app/
```

## Important Security Note

This is a static front-end project built with HTML, CSS, and JavaScript. Because there is no backend server, an OpenWeather API key cannot be securely hidden in the code.

For that reason, this repository does not include a personal API key.

The application offers two usage modes:

1. **Demo Mode** — works immediately using sample weather data.
2. **API Mode** — allows users to paste their own OpenWeather API key in the browser.

The API key entered in the application is stored only in the user's browser through `localStorage`. It is not committed to the repository.

## Problem Statement

Weather APIs return structured JSON data that can be difficult to interpret directly. This project shows how JavaScript can retrieve, process, and present API data in a readable user interface while handling asynchronous behavior and possible errors.

## Solution

The application uses a callback-based workflow:

```text
User enters city → JavaScript calls fetchAndSetWeatherData → Fetch API retrieves data → callback renders result
```

The project demonstrates:

- Callback functions
- Asynchronous operations using `fetch`
- Promise chaining with `.then()` and `.catch()`
- Error handling
- DOM manipulation
- Basic data transformation
- User input handling

## Features

- Search current weather by city
- Demo mode with sample data
- Optional OpenWeather API mode
- API key is not hardcoded
- Temperature conversion from Kelvin to Celsius
- Wind speed conversion from m/s to km/h
- Loading, success, and error states
- Responsive layout using custom CSS
- Custom SVG illustration included in the repository

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- OpenWeather API

## Project Structure

```text
weather-callback-app/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── fetchWeatherData.js
├── assets/
│   └── weather-hero.svg
└── README.md
```

## How to Use

### Option 1: Demo Mode

1. Open the application.
2. Leave **Use demo mode** enabled.
3. Enter a city.
4. Click **Get Weather**.

Demo mode uses sample data and does not require an API key.

### Option 2: API Mode

1. Create a free account at OpenWeather.
2. Generate an API key.
3. Open the application.
4. Disable **Use demo mode**.
5. Paste your API key in the API key field.
6. Enter a city and click **Get Weather**.

## What This Project Demonstrates

This project demonstrates the ability to transform a basic coding exercise into a more complete front-end application. It shows understanding of asynchronous JavaScript, API interaction, callback-based design, and user-centered interface improvements.

## Future Improvements

- Add geolocation-based weather search
- Add weather icons from OpenWeather response codes
- Add forecast support
- Add recent city search history
- Add unit toggle between Celsius and Fahrenheit
- Replace direct API usage with a backend proxy for production security

## Author

Hugo Villalva

Transitioning into technology leadership with a focus on AI, systems design, and full-stack development.
