import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Score from './components/Score.jsx'
import Tile from './components/Tile.jsx'

// next step is to learn how to get one tile to show one image from the api. 
// from there think about how you could seperate out the files to incoportate all functionality. 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Score/>
    <Tile/>
  </StrictMode>
)
