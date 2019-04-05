import React from 'react';
import 'bulma/css/bulma.css'


function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/delegaciones/', false, /\.(png|jpe?g|svg)$/));



const Delegaciones = () => {

    return (
        <div className="card has-shadow has-addons-centered">
            {images && images.map((i) => <figure key={i} className="image">
                <img src={i} alt={i} style={{maxWidth:"100vw"}}/>
            </figure>)}
        </div>
    );

};

export default Delegaciones