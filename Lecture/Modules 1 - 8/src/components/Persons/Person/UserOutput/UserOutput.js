import React from "react";
import './UserOutput.css'

const userOutput = props => {
    return (
        <div  className="UserOutput">
            <p>Random text 1</p>
            <p>Random text 2</p>
            <p> {props.username} </p>
        </div>
    )
}

export default userOutput