import React from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        client_credential_flow ("https://api.spotify.com/v1/playlists/"
        .concat(this.props.songsId.location.state.playlistId).concat("/tracks"), (err, songs_results) => {
            console.log(err, songs_results);
            let songsFromApi = JSON.parse(JSON.stringify(songs_results));
            this.setState({ songs: songsFromApi.items })
        });
    }
    
    render() {
        return (
            <div className="songs-catergory">
                <div className="playlist-info">
                    <h3>{this.props.songsId.location.state.playlistName}</h3>
                    <h3>Owner - {this.props.songsId.location.state.playlistOwner.display_name}</h3>
                </div>
                <div className="songs">
                    {this.state.songs.map((song) =>
                    <Link to={{pathname: process.env.PUBLIC_URL + "/songInfo",
                            state: {
                                    songId: song.track.id,
                                    songName: song.track.name,
                                    albumId: song.track.album.id,
                                    artists: song.track.artists,
                        }}} className="song-tile-link" key={song.track.id}>
                    <div className="song-tile">
                        <div className="song-info">
                            <p className="song-name" key={song.track.name}>{song.track.name}</p>
                            <div className="song-details">
                                <div className="list-of-artists">
                                    <p>Artist(s): </p>
                                    {song.track.artists.map((artist, i) => [
                                        i > 0 && ", ",
                                    <p key={i}>&nbsp;{ artist.name }</p>])}
                                </div>
                                <p className="song-detail"> Album: {song.track.album.name}</p> 
                                <p className="song-detail" key={song.track.album.id}>Release date: {song.track.album.release_date}</p>
                            </div>
                        </div>
                        <img className="album-img" src={song.track.album.images[1].url} alt={song.track.album.name}/>
                    </div>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default Songs