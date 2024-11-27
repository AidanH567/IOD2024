import "./App.css";
import AppRoutes from "../components/AppRoutes";
import NavBar from "../components/NavBar";
import MyThemeProvider from "../context/Themes";
import { EmojiProvider } from "../context/EmojiContext";
import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";
import MUIForm from "../components/MUIForm";
import { Dialog } from "@mui/material";
import Emoji from "../components/Emoji";
import BitcoinRates from "../components/BitcoinRates";

function App() {
  return (
    <EmojiProvider>
      <Dialog text="assda" />
      <MyThemeProvider>
        <BasicGrid />
        <Emoji />
        <NavBar />
        <BitcoinRates />
        <AppRoutes />
        <CustomCard />
        <MUIForm />
      </MyThemeProvider>
      {/* <Dialog text="My first MUI Dialog" /> */}
    </EmojiProvider>
  );
}

export default App;
