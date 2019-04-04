import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import ProgramaGeneral from "./components/ProgramaGeneral"
import Equipos from "./components/Equipos"
import Mapa from "./components/Mapa"
import logo from "./assets/logo.jpg"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, data: []};
        this.tabs = ["Programa General", "Equipos", "Mapa"]
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
                            this.tabs.map((tab, i) => <li key={i}
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


            </div>
        );
    }


}

export default App;
