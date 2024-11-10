import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoPlayer } from '../components/VideoPlayer'

import { Clock } from '../components/clock'
import ClockDisplay from '../components/ClockDsiplay'
import { ActivityFinder } from '../components/ActivityFinder'
import BitcoinRates from '../components/BitcoinRates'
ç
import ReducerCounter from '../components/ReducerCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>
      <BitcoinRates></BitcoinRates>
      
      <VideoPlayer></VideoPlayer>
      <ReducerCounter></ReducerCounter>
    </>
  )
}

export default App
