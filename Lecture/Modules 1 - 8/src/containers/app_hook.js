import React, { useState } from 'react'

const App_hook = props => {

    // We can define multiple states in functional components
    const [ personState, setPersonState ] = useState({
        persons: { name: 'Max', age: 29 },
        otherState: 'Other state which is part of person'
    })

    const [ otherState ] = useState( 'This is some other state' )

    // We usually define functions inside the component function
    const changeName = () => {
        // Updating the state requires to define the whole state again
        setPersonState({
            persons: [
                { name: 'Maximilian', age: 32 }
            ],
            otherState: personState.otherState
        })
    }

    return (
        <div>
            <h4>Hi, I'm {personState.persons.name} and I am {personState.persons.age} years old.</h4>
            <p> { otherState } </p>
            <button onClick={changeName}>Click Me! - Functional</button>
        </div>
    )
}

export default App_hook