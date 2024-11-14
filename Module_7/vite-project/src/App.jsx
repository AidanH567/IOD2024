import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { VideoPlayer } from "../components/VideoPlayer";

import { Clock } from "../components/clock";
import ClockDisplay from "../components/ClockDsiplay";
import { ActivityFinder } from "../components/ActivityFinder";
import BitcoinRates from "../components/BitcoinRates";

import ReducerCounter from "../components/ReducerCounter";
import { UserProvider } from "../Context/UserContext";
import { LoginForm } from "../components/LoginForm";
import PostListReducer from "../components/PostListReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <ClockDisplay></ClockDisplay>
        <ActivityFinder></ActivityFinder>
        <BitcoinRates></BitcoinRates>

        <LoginForm></LoginForm>
        <VideoPlayer></VideoPlayer>
        <ReducerCounter></ReducerCounter>
      </UserProvider>
    </>
  );
}

export default App;
