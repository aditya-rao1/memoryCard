import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Score from './components/Score.jsx'
import Tile from './components/Tile.jsx'

// The plan is to use props to have different information for the Tile after doing design
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Score/>
    <Tile/>
  </StrictMode>
)
