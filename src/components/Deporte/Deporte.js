import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import Edades from "../../components/Edades";


class Equipos extends Component {
    constructor(props) {
        super(props);
        this.tabs = ["Basquetbol", "Futbol", "Volleyball", "Porristas", "Todos"];
        this.state = {activeTab: this.tabs.length-1, genderSelection: props.genderSelection};
    }

    render() {

        return (
            <div>

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li
                            key={`${tab}${i}`}
                            className={`${i === this.state.activeTab ? "is-active" : ""}`}
                            // eslint-disable-next-line
                            onClick={() => this.switchTab(i)}><a >{tab}</a></li>)}
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
