import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/greetings'
import Massage from './components/Massahe'
function App() {
  

  return (
    <>
      <Greetings name = {"Ivan"}/>
      <Massage massage={"ABWGD"}/>
    </>
  )
}

export default App
