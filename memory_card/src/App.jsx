import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Score from './components/Score.jsx'
import Tile from './components/Tile.jsx'
import ImageCollector  from './components/ImageCollector.jsx'


function App() {
  const [score, setScore] = useState(0)
  const [onOff, setOnOff] = useState(true)

  return (
    <>
      <Header />
      <Score/>
      <ImageCollector/> 
    </>
  )
}



export default App
