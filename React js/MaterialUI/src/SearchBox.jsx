import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'


export default function SearchBox({updateInfo}){
    let API_KEY="6871ba0ae31c64a7d61ba2b88ac89e98";
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let [city,setCity]=useState("");

    let generateWeather=async ()=>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonResponse=await response.json();
        let result={
        city:city,
        temp:jsonResponse.main.temp,
        feelsLike:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        tempMax:jsonResponse.main.temp_max,
        tempMin:jsonResponse.main.temp_min,
        pressure:jsonResponse.main.pressure,
        weather:jsonResponse.weather[0].description
       }
       console.log(result)
       return result;
    }
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await generateWeather();
        updateInfo(newInfo)
    }
    return(
        <div>
        <h4>Search for The Weather</h4>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange} />
            <br /><br />
            <Button variant="contained" type='submit'>Submit</Button>

        </form>
        </div>
    )
}