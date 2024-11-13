import InfoBox from "./infobox";
import SearchBox from "./searchBox";
import { useState } from "react";


export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temperature : 26.05,
        temp_max :  26.05,
        temp_min :  26.05,
        humidity :  31,
        pressure :  1016,
        feelslike : 26.05,
        weather : "haze"
    });

    let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    }
 return (
    <>
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info = {weatherInfo}/>
    </>
 );
};