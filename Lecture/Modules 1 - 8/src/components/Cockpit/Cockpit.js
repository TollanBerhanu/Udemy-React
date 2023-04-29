import React, { useEffect, Fragment, useRef, useContext } from "react";
import './Cockpit.css'
import AuthContext from "../../context/authContext";

const Cockpit = props => {
    const toggleButtonRef = useRef(null); // declare a reference type variable

    const authContext = useContext(AuthContext) // get access to the context via 'authContext'

    useEffect(() => { // Hook for managing lifecycle in functional components, runs everytime a component (re)renders
        console.log('[Cockpit.js] useEffect')
        
        toggleButtonRef.current.click(); //Click this referenced button after it renders below

    }, [props.personsLength]) // only run if the second argument changes

    useEffect(()=>{ // You can call useEffect more than once
        return () => { // Used for clean up work ---> runs after every render cycle and before main useEffect function
            console.log('[Cockpit.js] cleanup work in useEffect')
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
                ref={toggleButtonRef}
            >Click Me! - Class-based</button> 
            <button onClick={authContext.login}> Login </button> {/* Invoke the login method from context */}        
        </Fragment>
    )
}

export default React.memo(Cockpit) // React.memo updates the components only when the state or props change automatically (alternative to shouldComponentUpdate)