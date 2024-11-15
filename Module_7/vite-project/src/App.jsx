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
import ThemeToggle from "../components/ThemeToggle";
import MyThemeProvider from "../context/Themes";
import Emoji from "../components/Emoji";
import { EmojiProvider } from "../context/EmojiContext";
import { EmojiContext } from "../context/EmojiContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmojiProvider>
        <MyThemeProvider>
          <ClockDisplay></ClockDisplay>
          <ActivityFinder></ActivityFinder>
          <Emoji />
          <BitcoinRates />
          <ThemeToggle />
          <VideoPlayer></VideoPlayer>
          <ReducerCounter></ReducerCounter>
        </MyThemeProvider>
      </EmojiProvider>
    </>
  );
}

export default App;
