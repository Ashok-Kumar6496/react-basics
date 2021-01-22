import React, {useState} from 'react'

function HookStateWithObject() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        id: ''
    })

    const changeId = (e) => {
        setPerson({...person, id: e.target.value})
    }
    return (
        <div>
            <h2>Person' first name is {person.firstName} and last name {person.lastName} and Id is {person.id}</h2>
            {/* Below we are spread(...) operator to update firstName beacause if we do it without that, it will create a new object with only firstname */}
            <input type="text" value={person.firstName}
                   onChange={e => setPerson({...person, firstName: e.target.value})}></input>
            <input type="text" value={person.lastName}
                   onChange={e => setPerson({...person, lastName: e.target.value})}></input>
            <input type="text" value={person.id} onChange={changeId}></input>
        </div>
    )
}

export default HookStateWithObject
