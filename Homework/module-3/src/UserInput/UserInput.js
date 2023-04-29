import React from "react";

const UserInput = props => {
    const style = {
        border: '1px solid orange',
        boxShadow: '1px 3px 5px 1px #333',
        margin: '20px',
        padding: '6px'
    }
    return (
        <>
            <input style={style} type='text' onChange={(event) => props.changed(props.curUser, event.target.value) } value={props.username[props.curUser]} />
        </>
    )
}

export default UserInput