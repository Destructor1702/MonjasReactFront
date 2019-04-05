import React from 'react';
import 'bulma/css/bulma.css'

import img1 from "../../assets/delegaciones/1.jpg"
import img2 from "../../assets/delegaciones/2.jpeg"
import img3 from "../../assets/delegaciones/3.jpeg"
import img4 from "../../assets/delegaciones/4.jpeg"
import img5 from "../../assets/delegaciones/5.jpeg"
import img6 from "../../assets/delegaciones/6.jpeg"

const images = [img1,img2,img3,img4,img5,img6];

const Delegaciones = () => {

    return (
        <div className="card has-shadow has-addons-centered">
            {images && images.map((i) => <figure key={i} className="image">
                <img src={i} alt={i} style={{maxWidth:500}}/>
            </figure>)}
        </div>
    );

};

export default Delegaciones