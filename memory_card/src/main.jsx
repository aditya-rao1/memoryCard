import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Score from './components/Score.jsx'
import Tile from './components/Tile.jsx'

// Think about how you can use this to now fulfill these parameters:
//1. The game should have a score that increases when the user clicks on a tile that has not been clicked before.
//2. There shoud be about 36 different images that are on screen at once. 
//3. From there once you click one it must randomly shift to another image
//4. The game should end when you click on a tile that has already been clicked before


//Have a pool of images called from an API that your game will randomly select from. WORK ON THIS NEXT TIME. 

//For now instead of coding, think about how each overarching feature should interact with each other. 
// Have state variables managing: 
// 1. The score
// 2. The images
// 3. The clicked tiles
// 4. The game state (on or off)

//Along with this figure out how to pass thosee API links and state variables down to the children components. PROPS????

//next time just write up stuff visualizing this or else it will NOT BE SUCESSFUL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
