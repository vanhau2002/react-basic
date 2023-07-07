import { useState, useEffect, } from "react";

function Content() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
    }) //để trong useeffect xử lý ra UI cho người dùng trước
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>

    )
}

export default Content