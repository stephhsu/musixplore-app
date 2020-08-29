import React from "react"
import { Switch, Route } from 'react-router-dom'
import BrowsePage from '../pages/BrowsePage'
import PlaylistsPage from '../pages/PlaylistsPage'
import AlbumPage from '../pages/AlbumPage'
import SongsPage from '../pages/SongsPage'
import SongInfoPage from '../pages/SongInfoPage'

const Main = () => {

    // <Route path="speaker" component={Speaker}/>
    // <Route path="speaker" render={props => <Speaker {...props} />} />
    return (
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <BrowsePage{...props} />} />
            <Route exact path={process.env.PUBLIC_URL + '/playlists'} render={props => <PlaylistsPage{...props} />} />
            <Route exact path={process.env.PUBLIC_URL + '/album'} render={props => <AlbumPage{...props} />} />
            <Route exact path={process.env.PUBLIC_URL + '/songs'} render={props => <SongsPage{...props} />} />
            <Route exact path={process.env.PUBLIC_URL + '/songInfo'} render={props => <SongInfoPage{...props} />} />
        </Switch>
    );
}

export default Main