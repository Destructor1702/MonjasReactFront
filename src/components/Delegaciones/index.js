import React from 'react';
import 'bulma/css/bulma.css'

import img1 from "../../assets/delegaciones/1.jpg"

const images = [img1];

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