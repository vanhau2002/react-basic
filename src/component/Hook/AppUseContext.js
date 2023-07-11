import { useState, createContext } from "react";
import ContentA from "./ContentA";
import './UseContext.css'

export const ThemeContext = createContext()


function AppUseContext() {


    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>

                <button onClick={toggleTheme}>Toggle theme</button>


                <ContentA />

            </div>
        </ThemeContext.Provider>

    )
}

export default AppUseContext