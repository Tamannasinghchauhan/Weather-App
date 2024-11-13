import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
   const INIT_URL = "https://media.istockphoto.com/id/1089026836/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=0&k=20&c=RnR49QsSkfTg2hhp-5VXPPoilvvo36fm0eQYaLhFegA="

  let HOT_URL = "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
  let COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyc3xlbnwwfHwwfHx8MA%3D%3D"
  let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"

    return (
    <div>
    <h3>Weather Info</h3>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ info.humidity > 80 ? RAIN_URL : info.temperature > 15 ? HOT_URL  : COLD_URL }
          alt="weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city} { info.humidity > 80 ? <ThunderstormIcon/> : info.temperature > 15 ?<WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature = {info.temperature}&deg;C</p>
           <p>TempMax = {info.temp_max}&deg;C</p>
           <p>TempMin = {info.temp_min}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Pressure = {info.pressure}</p>
           <p>Weather can be described as {info.weather} and it feels like {info.feelslike}&deg;C </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    )
}
