import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyThemeProvider from "../context/Themes";
import NavBar from "../components/NavBar";
import AppRoutes from "../components/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyThemeProvider>
      <NavBar />
      <AppRoutes />
    </MyThemeProvider>
  );
}

export default App;
