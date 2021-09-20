import React from 'react';


function Gallery ({id, title, cover, handleGalleryClick}){



    return(
        <div className="gallery">
            <h5>{title}</h5>
            <div className="clickable-image">
                <img src={cover} alt={title} className="gallery-cover" id={id} onClick={handleGalleryClick} width="200px" height="auto" />
            {/* <img src={gal.cover} alt={gal.title} className="gallery-cover" id={gal.id} onClick={handleGalleryClick} width="200px" height="auto"/> */}

            </div>

        </div>
    )
}

export default Gallery