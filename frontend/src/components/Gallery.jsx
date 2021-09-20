import React from 'react';
import Button from 'react-bootstrap/Button';

function Gallery ({id, title, cover, handleGalleryClick, handleDelete}){

    return(
        <div className="gallery">
            <h5>{title}</h5>
            <div className="clickable-image">
                <img src={cover} alt={title} className="gallery-cover" id={id} onClick={handleGalleryClick} width="200px" height="auto" />
            </div>
            <Button variant="outline-secondary" size="sm" id={id} onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default Gallery