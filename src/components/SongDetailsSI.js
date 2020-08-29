import React from 'react'
import client_credential_flow from "./clientCredential.js"

class SongDetailsSI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songDetails: {
                duration: '',
                popularity: '',
                previewUrl: ''
            }
        }
    }

    //https://api.spotify.com/v1/tracks/{id}
    componentDidMount() {
        client_credential_flow ("https://api.spotify.com/v1/tracks/"
        .concat(this.props.song.location.state.songId), (err, song_results) => {
            //console.log(err, song_results);
            let songDetailsFromApi = JSON.parse(JSON.stringify(song_results));
            this.setState({ 
                duration: songDetailsFromApi.duration_ms,
                popularity: songDetailsFromApi.popularity,
                previewUrl: songDetailsFromApi.preview_url
             })
        });
    }
    
    render() {        
        var minutes = Math.floor(this.state.duration / 60000);
        var seconds = ((this.state.duration % 60000) / 1000).toFixed(0);

        return (
            <div className="song-detail-section">
                <p className="song-detail">Duration: {minutes + ":" + (seconds < 10 ? '0' : '') + seconds}</p>
                <p className="song-detail">Popularity(from 1-100): {this.state.popularity}</p>
                <p className="song-detail">30 second preview:{' '}
                    <a className="preview" href={this.state.previewUrl}>here</a>
                </p>
            </div>
        );
    }
}

export default SongDetailsSI