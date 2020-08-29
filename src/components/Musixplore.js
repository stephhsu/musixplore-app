import React from "react"
import "../styles.css"
import { Link } from "react-router-dom";

function Musixplore() {  
    return(
        <h1> <Link to={{ pathname: process.env.PUBLIC_URL + "/" }} className="musixplore-icon-link"> musixplore </Link> </h1>
    )
}

export default Musixplore