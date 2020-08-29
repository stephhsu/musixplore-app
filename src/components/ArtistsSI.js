import React, { Component } from 'react'
import client_credential_flow from "./clientCredential.js"

class ArtistsSI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        // "https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin"
        const artistsUrl = "https://api.spotify.com/v1/artists?ids="
        let artistsIdsConcat = ""
        artistsIdsConcat = this.props.song.location.state.artists.map((artist, index) => { 
            return artistsIdsConcat + artist.id;
        });

        let artistsUrlWithIds = artistsUrl.concat(artistsIdsConcat);

        console.log("artistsUrlWithIds", artistsUrlWithIds)

        client_credential_flow (artistsUrlWithIds, (err, artists_results) => {
            console.log(err, artists_results);
            let artistsFromApi = JSON.parse(JSON.stringify(artists_results));
            this.setState({ artists: artistsFromApi.artists })
        });
    }

    render() {
        return (
            <div className="artist-category">
                <h3>Artists</h3>
                <div className="category">
                    {this.state.artists.map((artist) =>
                    <a className="artist-tile-link" href={artist.external_urls.spotify} key={artist.external_urls.url}> 
                    <div className="artist-tile" key={artist.id}>
                        <img className="artist-img" src={artist.images[1].url} alt={artist.name} key={artist.images[1].url}/>
                        <p className="artist-name" key={artist.name}> {artist.name} </p>
                    </div>
                    </a>)}
                </div>
            </div>
        );
    }
}

export default ArtistsSI