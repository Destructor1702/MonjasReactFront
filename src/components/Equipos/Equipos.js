import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import Deporte from "../Deporte"

class Equipos extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, data: []};
        this.tabs = ["Varonil", "Femenil"]
    }


    render() {
        return (
            <div>

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li key={`${tab}${i}`} className={i === this.state.activeTab ? "is-active" : ""}
                            // eslint-disable-next-line
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>
                <Deporte  genderSelection={() => this.state.activeTab}/>

            </div>
        );
    }


    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

}

export default Equipos;
