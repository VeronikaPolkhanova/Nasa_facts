import { useSelector } from 'react-redux';

import Gallery from '../components/gallery';
import RocketUp from '../components/rocketUp';

import '../components/gallery/style.css';

function FavouritePage() {
    const state = useSelector(store => store);

    if (state.favourite.length === 0) return (
        <div className="favourite-container">
            <div className="gallery">
                <p className="empty">Favorite facts are empty</p>
            </div>
        </div>
    )
    else return (
        <div className="favourite-container">
            <Gallery images={state.favourite} favourite={state.favourite} />
            <RocketUp />
        </div>
    )
}
export default FavouritePage;