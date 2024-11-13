import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "38e65000f9bdde024cf5aee8e799ccf3"

let getWeatherInfo = async () => {
  try {
    let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
      city: city,
     temperature: jsonResponse.main.temp,
    temp_max: jsonResponse.main.temp_max,
    temp_min: jsonResponse.main.temp_min,
    feelslike: jsonResponse.main.feels_like,
    humidity: jsonResponse.main.humidity, 
    pressure: jsonResponse.main.pressure,
    weather: jsonResponse.weather[0].description
    };
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
      try {
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      } catch (error) {
        setError(true);
      }
    }
    
  return (
    <div>
       <h3>Weather App</h3> 
      <form onSubmit={handleSubmit}>
        <TextField 
        id="City" 
        label="City Name" 
        variant="outlined"
        required value={city}
        onChange={handleChange}/>
       <br/><br/>
       <Button variant="contained" type='submit'>Search</Button>
       {error && <p style = {{color : "Red"}}>No such place exists!</p>}
       </form>
    </div>
    )
}