
import { useState } from "react";

import UseEffect from "../Router/UseEffect";


function AppB() {

    const [show, setShow] = useState(false)
    return (
        <div >
            <button onClick={() => setShow(!show)}>Show</button>
            {show && <UseEffect />}
        </div>
    );
}

export default AppB;


