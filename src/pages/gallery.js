import { useSelector } from 'react-redux';

import Gallery from '../components/gallery';
import RocketUp from '../components/rocket-up';
import VideoBg from "../components/videoBg";

function GalleryPage() {
    const state = useSelector(store => store);
    return (
        <div className="gallery-container">
            <VideoBg url="https://cdn.videvo.net/videvo_files/video/free/2013-10/large_watermarked/Background_08_preview.mp4" />
            <Gallery images={state.images} favourite={state.favourite} />
            <RocketUp />
        </div>
    )
}
export default GalleryPage;