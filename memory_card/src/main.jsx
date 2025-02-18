import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Score from './components/Score.jsx'
import Tile from './components/Tiles.jsx'

// The next step is to have each tile show a different image from an API..
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Score/>
    <Tile/>
  </StrictMode>
)
