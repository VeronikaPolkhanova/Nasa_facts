import { useState } from 'react';

import GalleryItem from './galleryItem';

import './style.css';

function Gallery({ images, favourite }) {
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const filteredData = images.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(inputText)
        }
    })
    return (
        <div className="gallery">
            <input onChange={inputHandler} />
            <div className="gallery-grid">
                {
                    filteredData.map((it) => <GalleryItem key={`${it.title}-${it.date}`} item={it} fav={favourite} />)
                }
            </div>
        </div>
    )
}
export default Gallery;