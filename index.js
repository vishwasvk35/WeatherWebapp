import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import weatherIcons from "./iconData.js"; // Assuming you're using ES6 export

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', async (req, res) => {
  try {
    const apiKey = 'f5f20914c141a7cc2d2a282f192a656e';
    const city = 'London';

    // Fetch weather data from OpenWeatherMap API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}&units=metric`);

    const weatherData = response.data;
    console.log(weatherData);
    

    // Find the icon based on the weather code from the data
    const weatherCode = weatherData.weather[0].id;
    const weatherIcon = weatherIcons.find(icon => icon.code === weatherCode)?.icon || "defaultIcon"; // Fallback icon
    console.log(weatherIcon);
    

    // Pass the data to the EJS template for rendering
    res.render("index", {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherIcon
    });

  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Error fetching weather data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});