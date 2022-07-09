import { useLocation } from "react-router-dom";

import video from '../../media/video/stars.mp4'
import './style.css';

function Description() {
    const location = useLocation();
    const { state } = location;
    return (
        <div className="description">
            <video
                height={"inherit"}
                muted
                loop
                autoPlay={"autoplay"}
                preload="auto"
                src={video}
                type="video/mp4">
            </video>
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
        </div>
    )
}
export default Description;