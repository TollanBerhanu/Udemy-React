import React from "react";

// 'With'... (WithClass) is a higher order component, it wraps around another component

 // One form of defining higher order components (usually used for adding content and style)
const WithClass = props => (
    <div className={ props.classes }> { props.children } </div>
)

export default WithClass