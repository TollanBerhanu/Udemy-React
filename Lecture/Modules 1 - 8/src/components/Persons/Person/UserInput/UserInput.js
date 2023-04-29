import React from "react";

const userInput = props => {
    const style = {
        backgroundColor: 'white',
        border: '1px solid #333',
        boxShadow: '0 3px 4px #222',
        margin: '15px auto',
        padding: '5px',
        fontWeight: 'bold'
    }
    return <input style={style} type="text" onChange={props.changeUsername} value={props.username} />
}

export default userInput