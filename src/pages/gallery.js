import { useSelector } from 'react-redux';

import Gallery from '../components/gallery';
import RocketUp from '../components/rocket-up';

function GalleryPage() {
    const state = useSelector(store => store);
    console.log(state.images);
    return (
        <div className="gallery-container">
            <Gallery images={state.images} favourite={state.favourite} />
            <RocketUp />
        </div>
    )
}
export default GalleryPage;