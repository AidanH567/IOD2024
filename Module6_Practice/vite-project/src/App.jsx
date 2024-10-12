import { useState } from 'react'
import PropsDisplayer from './PropsDisplayer.jsx' // up the top
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Welcome} from './Components.jsx';
import {Greeting} from './Greeting.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Welcome/>
        <Greeting name="John">
        Welcome to the React world!
      </Greeting>
<PropsDisplayer />
<PropsDisplayer myProp="first prop"/>
<PropsDisplayer prop1="first" prop2="second" prop3={3}/>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
