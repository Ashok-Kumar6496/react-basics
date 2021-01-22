import React from 'react'
import Person from './Person'

function NameList() {
    const names =
        [
            {
                id: 1,
                name: 'Ashok',
                age: 25,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Priyanka',
                age: 24,
                skill: 'Egg Plant'
            },
            {
                id: 3,
                name: 'Kitty',
                age: 25,
                skill: 'SQL'
            }
        ]

    const nameList = names.map(name => (
        <Person name={name} key={name.id}/>
    ))
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
