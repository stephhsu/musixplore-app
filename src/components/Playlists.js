import React from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }

    componentDidMount() {
        client_credential_flow ("https://api.spotify.com/v1/browse/categories/"
        .concat(this.props.playlistsId.location.state.categoryId).concat("/playlists"), (err, playlist_results) => {
            console.log(err, playlist_results);
            let playlistsFromApi = JSON.parse(JSON.stringify(playlist_results));
            this.setState({ playlists: playlistsFromApi.playlists.items })
        });
    }
    
    render() {
        return (
            <div className="playlists-category">
                <h3>{this.props.playlistsId.location.state.categoryName}</h3>
                <div className="playlists">
                {this.state.playlists.map((playlist) => 
                <Link to={{pathname: process.env.PUBLIC_URL + "/songs",
                            state: {
                                playlistId: playlist.id,
                                playlistName: playlist.name,
                                playlistOwner: playlist.owner
                            }
                    }}
                    className="playlist-tile-link" key={playlist.id}>
                    <div className="playlist-tile" key={playlist.id}>
                        {playlist.images.map((image) => 
                            <img className="playlist-img" src={image.url} alt={playlist.name}/>)}
                        <p className="playlist-name"> {playlist.name}</p>
                    </div>
                </Link>)}
                </div>
            </div>
        );
    }
}


export default Playlists