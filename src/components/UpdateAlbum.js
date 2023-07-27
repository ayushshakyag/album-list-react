import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const UpdateAlbum = (props) => {

  // Function to handle form submission and update the album
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    // Check if the inputs are empty, use the existing values in that case
    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function with the updated data
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className='update-album'>
        <div className='form-container'>
          {/* Display the existing title */}
          <h4>Title : {props.album.title}</h4>
          {/* Input for the new title */}
          <div className='inp-container'>
            Enter New Title :
            <input type="text" id='title-inp'></input>
          </div>

          {/* Display the existing userId */}
          <h4>User Id : {props.album.userId}</h4>
          {/* Input for the new userId */}
          <div className='inp-container'>
            Enter New UserId :
            <input type="number" id='userid-inp'></input>
          </div>

          {/* Button to save the changes */}
          <Link to='/'>
            <button type='submit' onClick={getUpdateData}>Save</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;