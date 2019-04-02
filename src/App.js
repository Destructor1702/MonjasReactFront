import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import SmartTable from "./components/SmartTable";
import ProgramaGeneral from "./components/ProgramaGeneral";
import api from "./api"
import Equipos from "./components/Equipos"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, data: []};
        this.tabs = ["Programa General", "Equipos", "Mapa"]
    }

    async componentDidMount() {
        this.setState({data: await api.getTeamList()})
        this.parseData()
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
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
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
                    ? <div>Mapa</div>
                    : null}
                </div>


            </div>
        );
    }

    parseData() {
        let rawData = this.state.data;
        //transform data here
        this.setState({data: rawData})
    }


}

export default App;
