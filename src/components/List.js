import React from 'react';
import { Link } from 'react-router-dom';

// Component to display an album
const List = (props) => {
  return (
    <div className='list'>
      {/* Display the album title */}
      <h3>{props.album.title}</h3>

      {/* Button group for update and delete options */}
      <div className='button-group'>
        {/* Link to the update album page with the album data */}
        <Link to="/update-album">
          <button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>
            Update
          </button>
        </Link>

        {/* Button to delete the album */}
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;