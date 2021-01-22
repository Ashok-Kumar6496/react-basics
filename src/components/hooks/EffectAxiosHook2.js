import axios from 'axios'
import React, {useState, useEffect} from 'react'

function EffectAxiosHook2() {
    const [post, setPost] = useState('')
    const [id, setId] = useState('')
    const [finalId, setFinalId] = useState('')

    // below hook will be executed when user clicks and updates the id from button.
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${finalId}`)
            .then(response => {
                console.log(response.data)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [finalId])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={() => setFinalId(id)}>Click</button>
            {post.title}
        </div>
    )
}

export default EffectAxiosHook2
