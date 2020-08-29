import React, { Component } from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class NewReleases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newReleases: []
        }
    }

    componentDidMount() {
        client_credential_flow ('https://api.spotify.com/v1/browse/new-releases', (err, new_releases_results) => {
            console.log(err, new_releases_results);
            let newReleasesFromApi = JSON.parse(JSON.stringify(new_releases_results));
            this.setState({ newReleases: newReleasesFromApi.albums.items })
        });
    }
    
    render() {
        return (
            <div className="new-releases-category">
                <h3>New Releases</h3>
                <div className="category">
                    {this.state.newReleases.map((newRelease) => 
                    <Link to={{pathname: process.env.PUBLIC_URL + "/album",
                                state: {
                                    albumId: newRelease.id,
                                    albumName: newRelease.name,
                                    albumsArtists: newRelease.artists
                        }}} className="new-releases-tile-link" key={newRelease.id + newRelease.name}>
                        <div className="new-releases-tile" key={newRelease.id}>
                            <img className="new-releases-img" key={newRelease.images[1].url} src={newRelease.images[1].url} alt={newRelease.name}/>
                            <p key={newRelease.name} className="new-releases-name"> {newRelease.name} </p>
                        </div>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default NewReleases