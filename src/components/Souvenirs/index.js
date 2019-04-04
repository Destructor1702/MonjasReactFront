import React from 'react';
import 'bulma/css/bulma.css'


const Souvenirs = ({images}) => {

    return (
        <div className="card has-shadow has-addons-centered">
            {images.map((i) => <figure key={i} className="image">
                <img src={i} alt={i} style={{maxWidth:500}}/>
            </figure>)}
        </div>
    );

}

export default Souvenirs