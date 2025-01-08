import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
    city : "jaipur",
    temp: 25.05,
    tempMax: 25.05,
    tempMix: 25.05,
    humidity: 47,
    feelsLike: 24.84,
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo)
    }

  return (
    <div>
      <h2> Weather App By Country's & City's</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  ) 
}
