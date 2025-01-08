import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const INIT_URL = "/weather.jpeg";
    const HOT_URL = "./hot.jpeg";
    const COLD_URL = "./cold.webp";
    const RAIN_URL = "./rain.jpeg";
//  let info = {
//     city : "jaipur",
//     temp: 25.05,
//     tempMax: 25.05,
//     tempMix: 25.05,
//     humidity: 47,
//     feelsLike: 24.84,
//  }
let imageUrl = INIT_URL;
    if (info.temp > 30) {
        imageUrl = HOT_URL; 
    } else if (info.temp < 15) {
        imageUrl = COLD_URL; 
    } else if (info.humidity > 60) {
        imageUrl = RAIN_URL; 
    }
 return(
    <div className='in'>
      <br></br>
       <Card sx={{ maxWidth: 345 ,border:'1px solid #000' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Tempature : {info.temp}&deg;c</p>
          <p>TempatureMax : {info.tempMax}&deg;c</p>
          <p>TempatureMin : {info.tempMix}&deg;c</p>
          <p>Humidity : {info.humidity}&deg;c</p>
          <p>Feels-like : {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
 )
}
