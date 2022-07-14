import { Link } from 'react-router-dom';

import VideoBg from '../components/videoBg';

import './style.css';

function AboutPage() {
    return (
        <div className="about-container">
            <VideoBg url="https://cdn.videvo.net/videvo_files/video/free/2016-05/large_watermarked/506401051_1_preview.mp4" />
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