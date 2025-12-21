import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/greetings'
import Massage from './components/Massahe'
import styleData from './style.json'
import Statistics from './components/Statistics'
import FriendsList from './components/FriendsList'
import friendsData from './friends.json'
function App() {
  

  return (
    <>
      {/* <Greetings name = {"Ivan"}/>
      <Massage massage={"ABWGD"}/> */}
      {/* <Statistics stats={styleData} /> */}
      <FriendsList friends = {friendsData}/>
    </>
  )
}

export default App
