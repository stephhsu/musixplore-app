import React from "react"
import "../styles.css"
import Musixplore from '../components/Musixplore'
import Songs from '../components/Songs'

function SongsPage(props) {  

    console.log(props)

    return(
        <div>
            <Musixplore/>
            <h2>Songs</h2>
            < Songs songsId={props}/>
        </div>
    )

}

export default SongsPage