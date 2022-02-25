import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';


import Img1 from '../images/two.jpg';
import Img2 from '../images/four.jpg';
import Img3 from '../images/one.jpg';
import Img4 from '../images/three.jpg';
import Img5 from '../images/six.jpg';
import Img6 from '../images/contactUs.png';
import Img7 from '../images/market.jpg';
import Img8 from '../images/signUp.jpg';


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },

        {
            id: 2,
            imgSrc: Img2,
        },

        {
            id: 3,
            imgSrc: Img3,
        },

        {
            id: 4,
            imgSrc: Img4,
        },

        {
            id: 5,
            imgSrc: Img5,
        },

        {
            id: 6,
            imgSrc: Img6,
        },

        {
            id: 7,
            imgSrc: Img7,
        },

        {
            id: 8,
            imgSrc: Img8,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgSrc} alt='' />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt='' style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery
