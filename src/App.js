import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import ProgramaGeneral from "./components/ProgramaGeneral"
import Equipos from "./components/Equipos"
import Mapa from "./components/Mapa"

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

            <div className="column is-8 is-offset-2 has-text-centered">

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li key={i}
                                                       className={i === st.activeTab ? "is-active" : ""}
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
