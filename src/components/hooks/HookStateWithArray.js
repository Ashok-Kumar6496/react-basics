import React, {useState} from 'react'

function HookStateWithArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add an item</button>
            <ul>
                {
                    items.map(item => <li>{item.id} and value is {item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookStateWithArray
