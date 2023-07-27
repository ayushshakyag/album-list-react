import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
import UpdateAlbum from './UpdateAlbum';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      updateAlbum: {}
    };
  }

  // Fetch albums data from an API when the component mounts
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => json);
    this.setState({
      albums
    });
  };

  // Function to delete an album from the albums list
  deleteAlbumFromList = (id) => {
    // API call to delete the album
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' });

    // Update state after removing the album from the list
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    alert('Your Album has been successfully deleted.');
    this.setState({
      albums: newAlbums,
    });
  };

  // Function to set the album to be updated in the state
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album
    });
  };

  // Function to update an album in the albums list
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];

    // Check if the album is from the API or a new one
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      };
    }

    // Update the album in the state
    albums[index] = updatedAlbum;
    this.setState({
      albums: albums
    });
    alert('Update successful');
  };

  // Function to add a new album to the albums list
  addAlbumToList = (userId, title) => {
    // API call to add the album
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);

    // Create a new album object
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    };

    // Update the state with the new album
    this.setState({
      albums: [...this.state.albums, album]
    });
    alert('New Album added successfully at the bottom.');
  };

  render() {
    return (
      <>
        <Routes>
          {/* Route to display the list of albums */}
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />} />
          {/* Route to add a new album */}
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />} />
          {/* Route to update an existing album */}
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />} />
        </Routes>
      </>
    );
  }
}