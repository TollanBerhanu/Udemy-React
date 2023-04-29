import React from "react";

//Another form of defining higher order components (usually used for adding JS logic or error handling)
const withClass = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent {...props} /> {/* we should spread the props otherwise we will lose all the props passed to it */}
        </div>
    )
}

export default withClass