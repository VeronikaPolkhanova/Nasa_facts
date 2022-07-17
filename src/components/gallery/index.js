import GalleryItem from './galleryItem';

import './style.css';

function Gallery({ images, favourite }) {

    return (
        <div className="gallery">
                <input />
                <div className="gallery-grid">
                    {
                        images.map((it) => <GalleryItem key={`${it.title}-${it.date}`} item={it} fav={favourite} />)
                    }
            </div>
        </div>
    )
}
export default Gallery;