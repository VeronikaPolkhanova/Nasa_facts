import { useLocation } from "react-router-dom";

import VideoBg from "../videoBg";

import './style.css';

function Description() {
    const location = useLocation();
    const { state } = location;
    return (
        <div className="description">
            <VideoBg url="https://cdn.videvo.net/videvo_files/video/free/2013-10/large_watermarked/Background_08_preview.mp4"/>
            <div className="item">
                <img src={state.url} alt={state.id} />
                <div className="description-text">
                    <p className="title">{state.title}</p>
                    <p className="explanation">{state.explanation}</p>
                    <div className="date-copyright">
                        <p className="date">{state.date}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Description;