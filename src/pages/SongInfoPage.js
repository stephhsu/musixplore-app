import React from "react"
import "../styles.css"
import Musixplore from '../components/Musixplore'
import AlbumInfoSI from '../components/AlbumInfoSI'
import SongDetailsSI from '../components/SongDetailsSI'
import ArtistsSI from '../components/ArtistsSI'

function SongInfoPage(props) {  

    console.log(props);

    return(
        <div>
            <Musixplore/>
            <h1>{props.location.state.songName}</h1>
            <div className="song-info-category">
                <SongDetailsSI song={props}/>
                <AlbumInfoSI song={props}/>
                <ArtistsSI song={props}/>
            </div>
        </div>
    )

}

export default SongInfoPage