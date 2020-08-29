import React from "react"
import "../styles.css"
import Musixplore from '../components/Musixplore'
import Playlists from '../components/Playlists'

function PlaylistsPage(props) {  

    console.log(props)

    return(
        <div>
            <Musixplore/>
            <h2>Playlists</h2>
            < Playlists playlistsId={props}/>
        </div>
    )

}

export default PlaylistsPage