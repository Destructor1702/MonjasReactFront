import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import ProgramaGeneral from "./components/ProgramaGeneral"
import Equipos from "./components/Equipos"
import Mapa from "./components/Mapa"
import Souvenirs from "./components/Souvenirs"
import logo from "./assets/logo.jpg"
import "./App.css"


import img1 from "./assets/souvenirs/1.jpeg"
import img2 from "./assets/souvenirs/2.jpeg"
import img3 from "./assets/souvenirs/3.jpeg"
import img4 from "./assets/souvenirs/4.jpeg"
import img5 from "./assets/souvenirs/5.jpeg"
import img6 from "./assets/souvenirs/6.jpeg"
import img7 from "./assets/souvenirs/7.jpeg"
import img8 from "./assets/souvenirs/8.jpeg"
import img9 from "./assets/souvenirs/9.jpeg"
import img10 from "./assets/souvenirs/10.jpeg"
import img11 from "./assets/souvenirs/11.jpeg"
const imagesSouv = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, data: []};
        this.tabs = ["Programa General", "Equipos", "Mapa", "Souvenirs"]
    }

    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

    render() {
        let st = this.state;
        return (

            <div className="box column is-10 is-offset-1 has-text-centered">
                <section className="hero  has-text-left">

                    <div className="container">
                        <figure className="image is-128x128 is-4">
                            <img src={logo} alt="horario"/>
                        </figure>
                        <strong>Juegos Intersalecianos XXI 2019</strong>
                    </div>
                    <br/>

                </section>

                <div className="tabs">
                    <ul>
                        {
                            this.tabs.map((tab, i) => <li
                                key={i}
                                className={i === st.activeTab ? "is-active" : ""}
                                // eslint-disable-next-line
                                onClick={() => this.switchTab(i)}><a>{tab}</a></li>)
                        }
                    </ul>
                </div>

                <div>{(this.state.activeTab === 0)
                    ? <ProgramaGeneral/>
                    : null}
                </div>
                <div>{(this.state.activeTab === 1)
                    ? <Equipos/>
                    : null}
                </div>
                <div>{(this.state.activeTab === 2)
                    ? <Mapa/>
                    : null}
                </div>
                <div>{(this.state.activeTab === 3)
                    ? <Souvenirs images={imagesSouv}/>
                    : null}
                </div>


            </div>
        );
    }


}

export default App;
