import React, {useState} from 'react'

function HookCounterTwo() {
    const initialValue = 0
    const [count, setCount] = useState(0)

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            // below setCount method will take previous state as a VREyeParameters. We can give any variable for that
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementByFive}>IncrementBy5</button>
        </div>
    )
}

export default HookCounterTwo
