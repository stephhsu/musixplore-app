import React from 'react'
import client_credential_flow from "./clientCredential.js"

class AlbumInfoSI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: {
                name: '',
                releaseDate: '',
                type: '',
                extUrl: '',
                imgUrl: ''
            }
        }
    }

    //https://api.spotify.com/v1/albums/{id}
    componentDidMount() {
        client_credential_flow ("https://api.spotify.com/v1/albums/"
        .concat(this.props.song.location.state.albumId), (err, album_results) => {
            //console.log(err, album_results);
            let albumDetailsFromApi = JSON.parse(JSON.stringify(album_results));
            this.setState({ 
                name: albumDetailsFromApi.name,
                releaseDate: albumDetailsFromApi.release_date,
                type: albumDetailsFromApi.album_type,
                extUrl: albumDetailsFromApi.external_urls.spotify,
                imgUrl: albumDetailsFromApi.images[1].url
             })
        });
    }
    
    render() {
        return (
            <div className="album-section">
                <div className="album-info">
                    <p className="album-name">Album: {this.state.name}</p>
                    <div className="album-details">
                        <p className="album-detail">Release date: {this.state.releaseDate}</p>
                        <p className="album-detail">Album type: {this.state.type}</p>
                        <p className="album-detail">Spotify external url:{' '}
                            <a className="preview" href={this.state.extUrl}>here</a>
                        </p>
                    </div>
                </div>
                <img className="album-img" src={this.state.imgUrl} alt={this.state.name}/>
            </div>
        );
    }
}

export default AlbumInfoSI