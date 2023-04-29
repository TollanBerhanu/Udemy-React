import React from "react";

const validation = props => {
    let validationText = ''
    if(props.textLength < 5) validationText = 'Text too short' 
    else validationText = 'Text long enough'
    return (
        <p>{ validationText }</p>
    )
}

export default validation;