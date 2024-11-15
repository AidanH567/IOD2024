import { useState, useContext } from "react";
import { Clock } from "./clock";
import { MyThemeContext } from "../context/Themes"; 

export function ClockDisplay() {
    const [showClock, setShowClock] = useState(false);
    const { theme } = useContext(MyThemeContext); 

    const toggleClock = () => {
        setShowClock(!showClock);
    };
    
    return (
        <div 
            className="ClockDisplay componentBox" 
            style={{ background: theme.background, color: theme.foreground }}
        >
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    );
}

export default ClockDisplay;
