import React, { useEffect, Fragment, useRef, useContext } from "react";
import './Cockpit.css'
import AuthContext from "../../context/authContext";

const Cockpit = props => {
    const toggleButtonRef = useRef(null); // declare a reference type variable and set initial value to null

    const authContext = useContext(AuthContext) // get access to the context via 'authContext'

    // Hook for managing lifecycle in functional components, runs everytime after a component (re)renders (when a component
    // is created or updated and after it's rendered). We can make side-effects inside useEffect.
    useEffect(() => { 
        console.log('[Cockpit.js] useEffect on personsLength change')
        
        toggleButtonRef.current.click(); //Click this referenced button after it renders below

    }, [props.personsLength]) // only run if the second argument changes (the 2nd argument being the array)

    useEffect(()=>{ // You can call useEffect more than once
        console.log('[Cockpit.js] useEffect on component mount')
        
        const timer = setTimeout(() => {    // This will run when the Cockpit component mounts
            // alert('5 Seconds passed without removing Cockpit')            
        }, 5000)

        return () => { // Used for clean up work ---> runs after every render cycle and before the main useEffect function
            console.log('[Cockpit.js] useEffect on component unmount/removal') // the component being removed is the Cockpit
            
            clearTimeout(timer) // This will clear the timer when the Cockpit component unmounts. This is one example of
                // cleanup work. Had this not been here, the alert message would have popped even if Cockpit unmounts.
        }
        
    }, []) // If the second argument is an empty array, useEffect will run only when the component mounts (not on update)

    const classes = []
    if(props.personsLength <= 2) classes.push('red')
    if(props.personsLength <= 1) classes.push('italic')

    return (
        // <React.Fragment>
        <Fragment>
            <h1>{props.title}</h1>
            <h2 className={ classes.join(' ') }>Another element</h2>
            {/* Only pass a reference of the funtion otherwise it will be executed immediately */}
            <button 
                style={props.style}
                onClick={() => props.clicked('Manuscripts')}
                ref={toggleButtonRef}   // bind a reference variable to this button, which we'll use to click the button
                                                                                                // insde useEffect above
            >Click Me! - Class-based</button> 
            <button onClick={authContext.login}> Login </button> {/* Invoke the login method from context */}        
        </Fragment>
    )
}

// React.memo only updates the components only when the state/props change automatically (alternative to shouldComponentUpdate)
export default React.memo(Cockpit) 