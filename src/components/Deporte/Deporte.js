import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import Edades from "../../components/Edades";


class Equipos extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, genderSelection: props.genderSelection};
        this.tabs = ["Basquetbol", "Futbol", "Volleyball"];
    }

    render() {
        this.tabs = (this.state.genderSelection() === 0)
            ? ["Basquetbol", "Futbol", "Volleyball"]
            : ["Basquetbol", "Futbol", "Volleyball", "Porristas"];
        return (
            <div>

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li key={`${tab}${i}`} className={i === this.state.activeTab ? "is-active" : ""}
                            // eslint-disable-next-line
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>

                <Edades sportSelection={() => this.state.activeTab}
                        genderSelection={() => this.state.genderSelection()}/>

            </div>
        );
    }


    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

}

export default Equipos;
