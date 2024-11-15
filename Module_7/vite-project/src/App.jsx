import "./App.css";
import AppRoutes from "../components/AppRoutes";
import NavBar from "../components/NavBar";
import MyThemeProvider from "../context/Themes";
import { EmojiProvider } from "../context/EmojiContext";

function App() {
  return (
    <EmojiProvider>
      <MyThemeProvider>
        <NavBar />
        <AppRoutes />
      </MyThemeProvider>
    </EmojiProvider>
  );
}

export default App;
