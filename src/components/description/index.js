import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import VideoBg from '../videoBg';
import FavStar from '../favStar';

import './style.css';

function Description() {
    const location = useLocation();
    const { state } = location;

    const fav = useSelector(store => store.favourite);

    return (
        <div className="description">
            <VideoBg url="https://cdn.videvo.net/videvo_files/video/free/2013-10/large_watermarked/Background_08_preview.mp4" />
            <div className="item">
                <Link to='/gallery'>
                    <HiOutlineArrowNarrowLeft className='back-link' />
                </Link>
                <img src={state.url} alt={state.id} />
                <div className="description-text">
                    <p className="title">{state.title}</p>
                    <p className="explanation">{state.explanation}</p>
                    <div className="date-copyright">
                        <FavStar fav={fav} item={state} />
                        <p className="date">{state.date}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Description;