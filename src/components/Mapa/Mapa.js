import React, {Component} from 'react';
import 'bulma/css/bulma.css'

import mapImg from "../../assets/map.jpg";

class Mapa extends Component {
    render() {
        return (
            <div className="card has-shadow">
                <figure className="image">
                    <img src={mapImg} />
                </figure>
            </div>
        );
    }
}

export default Mapa