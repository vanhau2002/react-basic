import UseEffect from "../Router/UseEffect";
import { useState } from "react";


function AppUseEffect() {

    const [show, setShow] = useState(false)
    return (
        <div >
            <button onClick={() => setShow(!show)}>Show</button>
            {show && <UseEffect />}
        </div>
    );
}
export default AppUseEffect;