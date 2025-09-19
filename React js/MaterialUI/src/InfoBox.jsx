import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAINY_URL="https://media.istockphoto.com/id/2205223397/photo/conceptual-image-of-tropical-storm.jpg?s=2048x2048&w=is&k=20&c=rgbLvNpxizGw6A2uzN2semUFCcPrfmdfBd3hEYWEfBg="
    return(
        <div className="infobox">
            <h1>Weather Info {info.humidity>80 ?<ThunderstormIcon/>:info.temp>15 ? <LightModeIcon/>:<SevereColdIcon/>}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80 ?RAINY_URL:info.temp>15 ? HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}  component={"span"}>
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity ={info.humidity}</p>
            <p>Min Temp ={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>The weather can be described as {info.weather} and feels like {info.feelsLike}.</p>
         
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}