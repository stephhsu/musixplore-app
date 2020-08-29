import React, { Component } from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class FeaturedPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredPlaylists: []
        }
    }

    componentDidMount() {
        client_credential_flow ('https://api.spotify.com/v1/browse/featured-playlists', (err, featured_playlist_results) => {
            console.log(err, featured_playlist_results);
            let featuredPlaylistsFromApi = JSON.parse(JSON.stringify(featured_playlist_results));
            this.setState({ featuredPlaylists: featuredPlaylistsFromApi.playlists.items })
        });
    }
    
    render() {
        return (
            <div className="featured-playlists-category">
                <h3>Featured Playlists</h3>
                <div className="category">
                    {this.state.featuredPlaylists.map((featuredPlaylist) => 
                    <Link to={{pathname: process.env.PUBLIC_URL + "/songs",
                                state: {
                                    playlistId: featuredPlaylist.id,
                                    playlistName: featuredPlaylist.name,
                                    playlistOwner: featuredPlaylist.owner
                        }}} className="featured-playlist-tile-link" key={featuredPlaylist.id}>
                        <div className="featured-playlist-tile" key={featuredPlaylist.id}>
                            {featuredPlaylist.images.map((image) => 
                            <img className="featured-playlist-img" key={featuredPlaylist.id} src={image.url} alt={featuredPlaylist.name}/>)}
                            <p key={featuredPlaylist.id} className="featured-playlist-name"> {featuredPlaylist.name} </p>
                        </div>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default FeaturedPlaylists