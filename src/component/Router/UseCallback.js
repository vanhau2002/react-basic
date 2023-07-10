import { useCallback, useState } from "react";
import Content from "../Hook/Content";



function UseCallback() {
    const [count, setCount] = useState(0)
    const handleincrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)

    }, [])
    return (
        <div>
            <Content onIncrease={handleincrease} />
            <h1>{count}</h1>

        </div>
    )
}

export default UseCallback;