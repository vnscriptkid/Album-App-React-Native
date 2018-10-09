// know how to fetch a list of albums and render a list of albumDetails
// https://rallycoding.herokuapp.com/api/music_albums

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetail';

// const AlbumList = () => <View><Text>Album List</Text></View>;
class AlbumList extends Component {

    state = {
        albums: []
    }

    componentWillMount() {
        console.log('component will mount!');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetails key={album.url} album={album} />);
    }
    
    render() {
        console.log('render: ', this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
