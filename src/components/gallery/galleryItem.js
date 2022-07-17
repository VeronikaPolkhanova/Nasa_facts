import { Link } from 'react-router-dom';

import FavStar from '../favStar';

function GalleryItem({ item, fav }) {
    return (
        <div className="gallery-item">
            <img alt={`${item.caption}`} src={item.url} />
            <p className="title">{item.title}</p>
            <Link to={`/gallery/${item.title}-${item.date}`} state={item} className="more-btn">More</Link>
            <FavStar fav={fav} item={item} className="fav"/>
        </div>
    )
}
export default GalleryItem;