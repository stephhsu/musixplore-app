import React from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumName: [],
            albumArtists: [],
            albumTracks: [],
            albumImg: '',
            albumId: '',
            albumReleaseDate: ''    
        }
    }

    componentDidMount() {
        client_credential_flow ("https://api.spotify.com/v1/albums/"
        .concat(this.props.albumInfo.location.state.albumId), (err, album_results) => {
            console.log(err, album_results);
            let albumFromApi = JSON.parse(JSON.stringify(album_results));
            this.setState({ albumName: albumFromApi.name,
                            albumArtists: albumFromApi.artists,
                            albumTracks: albumFromApi.tracks.items,
                            albumImg: albumFromApi.images[1].url,
                            albumId: albumFromApi.id,
                            albumReleaseDate: albumFromApi.release_date
            })
        });
    }
    
    render() {
        return (
            <div className="album-catergory">
                <div className="playlist-info">
                    <h3>{this.state.albumName}</h3>
                    <div className="list-of-artists">
                        <h3>Artist(s) - </h3>
                        {this.state.albumArtists.map((artist, i) => [
                            i > 0 && ", ",
                        <h3 key={i}>&nbsp;{ artist.name }</h3>])}
                    </div>
                </div>
                <div className="album">
                    {this.state.albumTracks.map((track) =>
                    <Link to={{pathname: process.env.PUBLIC_URL + "/songInfo",
                            state: {
                                    songId: track.id,
                                    songName: track.name,
                                    albumId: this.state.albumId,
                                    artists: track.artists
                        }}} className="song-tile-link" key={track.id}>
                    <div className="song-tile">
                        <div className="song-info">
                            <p className="song-name" key={track.name}>{track.name}</p>
                            <div className="song-details">
                                <div className="list-of-artists">
                                    <p>Artist(s): </p>
                                    {track.artists.map((artist, i) => [
                                        i > 0 && ", ",
                                    <p key={i}>&nbsp;{ artist.name }</p>])}
                                </div>
                                <p className="song-detail"> Album: {this.state.albumName}</p> 
                                <p className="song-detail" key={this.state.albumId}>Release date: {this.state.albumReleaseDate}</p>
                            </div>
                        </div>
                        <img className="album-img" src={this.state.albumImg} alt={this.state.albumName}/>
                    </div>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default Album