import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import {useState} from 'react'
export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"sunny"
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}