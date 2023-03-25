import React from 'react'
import { useLocation } from "react-router-dom"

const Reactproptestresult = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div className="reactproptestresult">
            hello
        </div>
    )
}

export default Reactproptestresult
