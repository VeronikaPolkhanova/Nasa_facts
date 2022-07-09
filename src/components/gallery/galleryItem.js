import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SetFavouriteAction } from '../../store/actions';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

function GalleryItem({ item, fav }) {
    const dispatch = useDispatch();
    const SetFavourite = (payload) => {
        dispatch(SetFavouriteAction(payload));
    }
    return (
        <div className="gallery-item">
            <img alt={`${item.caption}`} src={item.url} />
            <p className="title">{item.title}</p>
            <Link to={`/gallery/${item.title}-${item.date}`} state={item} className="more-btn">More</Link>
            <span className="fav" onClick={() => SetFavourite(item)}>
                {
                    fav.find(it => it.title === item.title) ? <ImStarFull /> : <ImStarEmpty />
                }
            </span>
        </div>
    )
}
export default GalleryItem;