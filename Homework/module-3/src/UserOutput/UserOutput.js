import React from "react";

const UserOutput = (props) => {

    const style = {
        margin: '20px',
        padding: '10px',
        color: '#333',
        border: '1px solid blue',
        borderRadius: '7px'
    }

    return (
        <div style={style}>
           <p>Hello {props.username}.This is the first paragraph!</p> 
           <p>And this is the second paragraph!!</p> 
        </div>
    )
}

export default UserOutput