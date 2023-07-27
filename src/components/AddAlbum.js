import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AddAlbum = (props) => {

  // Function to handle form submission and add a new album to the list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          {/* Input for User ID */}
          <div className='inp-container'>
            Enter User Id:
            <input id='aaform-userid-inp' type="number" />
          </div>
          {/* Input for Album Title */}
          <div className='inp-container'>
            Enter Album Title:
            <input id='aaform-title-inp' type="text" />
          </div>
          {/* Button to add the album to the list */}
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;






