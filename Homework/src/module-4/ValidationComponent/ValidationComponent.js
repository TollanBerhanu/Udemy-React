import React from "react";

const Validation = props => {
    let validationText = null

    if (props.paragraphLength < 100)
        validationText = 'Text too short! :('
    else if (props.paragraphLength === 100)
        validationText = 'Text long enough. :)'
    else
        validationText = 'Text too long! >:('
        
    return <p>{validationText}</p>
}

export default Validation