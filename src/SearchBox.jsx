
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city ,setCity] = useState("")
  

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "26b954756d8df559efc14884ff03ac46"

  let getWeatherInfo = async ()=>{
    try{
          let response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}&units=metric`);
    
          let jsonResponse = await response.json();
    //console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
    }
    console.log(result);
    return result;
  }
     catch(err){
      console.error(err);
    }
    
  }

    let handleChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city)
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
      }
  return (
    <div className='SearchBox'>
      {/* <h2> Search the whether of any city </h2> */}
      <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br></br><br></br>
      <Button variant="contained" type="submit" className='sty'> Search </Button>
      </form>
    </div>
  )
}
