import { Link, animateScroll as scroll } from "react-scroll";
import { IoRocketOutline } from 'react-icons/io5';

import './style.css';

function RocketUp() {
    return (
        <Link className="rocket-up" onClick={() => scroll.scrollToTop()} to="">
            <IoRocketOutline />
        </Link>
    )
}
export default RocketUp;