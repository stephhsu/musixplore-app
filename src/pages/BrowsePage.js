import React, {Component} from "react"
import "../styles.css"
import Musixplore from '../components/Musixplore'
import Genres from '../components/Genres'
import FeaturedPlaylists from '../components/FeaturedPlaylists'
import NewReleases from '../components/NewReleases'


class BrowsePage extends Component {    
    render(){
        return(
            <div>
                <Musixplore/>
                <h2>Browse</h2>
                <Genres/>
                <FeaturedPlaylists/>
                <NewReleases/>
            </div>
        )
    }
}

export default BrowsePage