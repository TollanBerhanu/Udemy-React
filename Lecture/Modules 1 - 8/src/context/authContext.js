import React from "react";

const authContext = React.createContext(
    {
        authenticated: true, 
        login: () => {}
    }
)

export default authContext;