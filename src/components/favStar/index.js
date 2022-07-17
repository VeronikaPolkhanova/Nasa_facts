import { useDispatch } from 'react-redux';

import { SetFavouriteAction } from '../../store/actions';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

import './style.css';

function FavStar({ fav, item }) {
    const dispatch = useDispatch();
    const SetFavourite = (payload) => {
        dispatch(SetFavouriteAction(payload));
    }
    return (
        <span onClick={() => SetFavourite(item)} className="fav">
            {
                fav.find(it => it.title === item.title) ? <ImStarFull /> : <ImStarEmpty />
            }
        </span >
    )
}
export default FavStar;