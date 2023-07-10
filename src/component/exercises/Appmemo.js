import { useState } from "react";
import Content from "../Hook/Content";


function Appmemo() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)

    }
    return (
        <div>
            <Content />
            <h1>{count}</h1>
            <button onClick={increase}>onClick</button>
        </div>
    )
}

export default Appmemo