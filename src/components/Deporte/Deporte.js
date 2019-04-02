import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import SmartTable from "../../components/SmartTable";




class Equipos extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, genderSelection: props.genderSelection};
        this.tabs = [ "basketball", "soccer", "volleyball"];
        this.parentTabs = ["Varonil", "Femenil"]
    }

    render() {
        return (
            <div>

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li className={i === this.state.activeTab ? "is-active" : ""}
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>


                <div> {this.tabs[this.state.activeTab]}- {this.parentTabs[this.state.genderSelection()]}</div>


            </div>
        );
    }



    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

}

export default Equipos;
