import React from "react"
import "../styles.css"
import Musixplore from '../components/Musixplore'
import Album from '../components/Album'

function AlbumPage(props) {  

    console.log(props)

    return(
        <div>
            <Musixplore/>
            <h2>Album</h2>
            <Album albumInfo={props}/>
        </div>
    )

}

export default AlbumPage