import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // Here useEffect will execute the code only where there is change in count value which we have given as 2nd param to it
    useEffect(() => {
        console.log("Re rendered DOM")
    }, [count])

    return (
        <div>
            Count : {count}
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default EffectHookCounter
