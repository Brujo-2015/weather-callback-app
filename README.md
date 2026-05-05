# Weather Data App

## Overview

A front-end application that retrieves real-time weather data using asynchronous JavaScript and callback functions. The app demonstrates how external APIs can be integrated into a responsive user interface while handling loading states, errors, and user interaction.

---

## Live Demo

https://brujo-2015.github.io/weather-data-app/

---

## Problem Statement

Accessing real-time external data requires managing asynchronous operations, handling errors gracefully, and providing clear feedback to users—all within the constraints of a browser-based environment.

---

## Solution

This application uses the Fetch API combined with callback functions to retrieve weather data and dynamically update the UI. It includes both a demo mode for immediate use and an API mode for real-time data.

---

## How to Use

### Demo Mode (No Setup Required)

1. Open the application
2. Leave **Demo Mode** enabled
3. Enter a city
4. Click **Get Weather**

This mode uses predefined sample data and works without an API key.

### API Mode (Real Data)

1. Create a free account at https://openweathermap.org
2. Generate an API key
3. Disable **Demo Mode**
4. Paste your API key into the input field
5. Enter a city and click **Get Weather**

---

## Important Security Note

This is a static front-end application built with HTML, CSS, and JavaScript. Because there is no backend server, API keys cannot be securely stored in the code.

For this reason, this repository does not include a personal API key.

The application supports two usage modes:

* **Demo Mode** — uses sample data and works immediately
* **API Mode** — allows users to provide their own OpenWeather API key

Any API key entered is stored only in the user's browser using `localStorage` and is never committed to the repository.

---

## Key Features

* API integration with OpenWeather
* Asynchronous data handling using callback functions
* Error handling and user feedback
* Dual operation mode (demo and live API)
* Clean and responsive UI

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Fetch API

---

## Architecture Approach

* **Data Layer** → API responses or demo data
* **Logic Layer** → Fetch + callbacks + error handling
* **Presentation Layer** → DOM updates and UI rendering

---

## What This Project Demonstrates

* Asynchronous programming in JavaScript
* Use of callback functions for flow control
* API integration patterns in front-end applications
* Handling UI states (loading, success, error)
* Awareness of front-end security limitations

---

## Future Improvements

* Replace callbacks with async/await
* Add weather icons and richer UI
* Cache API responses
* Add geolocation-based weather lookup

---

## Author

Hugo Villalva
