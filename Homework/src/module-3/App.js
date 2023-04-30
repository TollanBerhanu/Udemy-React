import React, { useState } from "react";
import UO from './UserOutput/UserOutput'
import UI from './UserInput/UserInput'
import './App.css'

function App() {
  const [username, setUsername] = useState(['Alice', 'Bob'])

  const usernameChangedHandler = (userNo, newUsername) => {
    userNo === 0 ? 
      setUsername([ newUsername ,username[1]]) : setUsername([username[0], newUsername])
  }

  return (
    <div className="App">
      <h3> Homework - Module 3 </h3>
      {
        username.map((user, usrIdx) =>
          <>
            <UO username={user} />
            <UI changed={usernameChangedHandler} curUser={usrIdx} username={username} />
          </>
        )
      }
    </div>
  );
}

export default App;
