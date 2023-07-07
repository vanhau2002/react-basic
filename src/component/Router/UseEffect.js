import { useState, useEffect, } from "react";
const tabs = ['posts', 'comments', 'albums']

function UseEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
        document.title = title

    }, [type]) //để trong useeffect xử lý ra UI cho người dùng trước
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>

    )
}

export default UseEffect;