import React from "react";

// Another form of defining higher order components (usually used for adding JS logic or error handling)
// Here, we are not returning a functional component, but instead a regular javascript function that takes two arguments (no props)
// WrapperComponent is just a reference to another component, className is an arbitrary parameter we need in our hoc
const withClass2 = (WrapperComponent, className) => {
    // We return a functional component inside our regular function
    return props => (
        <div className={className}> 
            <WrapperComponent {...props} /> {/* we should pass on the props because the props meant for the wrapped
                component 'WrapperComponent' will go to the component wrapping it (in this case WrapperComponent is Person
                and all props passed to Person component will end up in the HOC that wraps it) */}
        </div>
    )
}
// Keep in mind that when we use this hoc, we pass the component we want to wrap as the first parameter and any data we
// want to pass as the second.
    // E.g., export default withClass2(App, classes)
// The hoc shouldn't go into your jsx code (<WithClass> .. </WithClass>) because its not a component, it's a function that
// takes a Component and some parameters

export default withClass2