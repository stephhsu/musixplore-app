import React, { Component } from 'react'
import { Link } from "react-router-dom";
import client_credential_flow from "./clientCredential.js"

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        client_credential_flow ('https://api.spotify.com/v1/browse/categories', (err, genre_results) => {
            console.log(err, genre_results);
            let genresFromApi = JSON.parse(JSON.stringify(genre_results));
            this.setState({ genres: genresFromApi.categories.items })
        });
    }
    
    render() {
        return (
            <div className="browse-category">
                <h3>Genres</h3>
                <div className="category">
                    {this.state.genres.map((genre) => 
                    <Link to={{pathname: process.env.PUBLIC_URL + "/playlists",
                                state: {
                                    categoryId: genre.id,
                                    categotyName: genre.name}
                        }}
                        className="category-tile-link" key={genre.id}>
                        <div className="category-tile" key={genre.id}>
                            {genre.icons.map((icon) => 
                            <img className="category-img" key={genre.id} src={icon.url} alt={genre.name}/>)}
                            <p key={genre.id} className="category-name"> {genre.name} </p>
                        </div>
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default Genres