import SearchBox from './SearchBox.jsx'
import './App.css'
import InfoBox from './InfoBox.jsx'
import WeatherApp from './WeatherApp.jsx'

function App() {
  let clickHandler=()=>{
    console.log("button is clicked")
  }

  return (
    <>
    <WeatherApp/>
    </>
  )
}

export default App
