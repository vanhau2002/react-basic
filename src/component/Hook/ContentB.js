import { ThemeContext } from "./AppUseContext"
import { useContext } from "react"



function ContentB() {
    const theme = useContext(ThemeContext)


    return (
        <p className={theme}>
            UseContext
        </p>
    )
}

export default ContentB