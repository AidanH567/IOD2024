import React, { useContext } from 'react';
import { MyThemeContext, themes } from '../context/Themes';

export default function ThemeToggle() {
    const { theme, setTheme, darkMode } = useContext(MyThemeContext);

    const toggleTheme = () => {
        setTheme(darkMode ? themes.light : themes.dark);
    };

    return (
        <button onClick={toggleTheme}>
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
}
