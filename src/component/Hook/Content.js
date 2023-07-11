
import { memo } from "react";


function Content({ onIncrease }) {
    return (
        <>
            <h1>Hello anh em </h1>
            <button onClick={onIncrease}>onClick</button>
        </>
    )
}
export default memo(Content)