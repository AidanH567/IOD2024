import { useState } from "react";
import { Clock } from "./clock";
export function ClockDisplay() {

    const [showClock, setShowClock] = useState(false);
    
    const toggleClock = () => {
    setShowClock(!showClock);
    }
    
    return (
    <div className="ClockDisplay componentBox">
    {showClock && <Clock />}
    <button onClick={toggleClock}>Toggle Clock</button>
    </div>
    )
    }
    export default ClockDisplay;