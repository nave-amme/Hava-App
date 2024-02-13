// Import axios to make HTTP requests
import axios from 'axios';
import APIservice from "@/assets/APIservice";


// Define the base URL of the OpenWeatherMap API
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

// Your OpenWeatherMap API key (replace 'your_api_key_here' with your actual API key)
const API_KEY = 'e244db162745edeb338c75c37eb81a93';

export default {
  // Define a method to fetch weather data for a specific city
  getWeather(city) {
    // Construct the full URL with the city, API key, and units (metric for Celsius)
    return axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  },
};
