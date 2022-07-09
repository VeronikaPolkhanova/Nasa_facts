import { Link } from 'react-router-dom';
import './style.css';
import video from '../media/video/planet.mp4';

function AboutPage() {
    return (
        <div className="about-container">
            <video
                height={"inherit"}
                muted
                loop
                autoPlay={"autoplay"}
                preload="auto"
                src={video}
                type="video/mp4">
            </video>
            <a className="link nasa" target="_blank" rel="noreferrer" href="https://www.nasa.gov/">Nasa web-site</a>
            <div className="text">
                <h2>Random facts about space</h2>
                <p>You can use this app to know some random fact about space, astronautics, planet or events. All informatioin are hold from NASA API. </p>
                <Link className="button-link" to="/gallery">Try now</Link>
            </div>
        </div>
    )
}
export default AboutPage;