import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import api from "../../api";
import SmartTable from "../SmartTable";


class ProgramaGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, data: []};
        this.tabs = ["Horarios", "Colegios Participantes"]
    }



    render() {
        return (
            <div>
                <h3 className="title">Programa Genereal</h3>
                <div className="content">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend
                        gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
                        Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>

                </div>
                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li
                            key={i}
                            className={i === this.state.activeTab ? "is-active" : ""}
                            onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>

                <div>{(this.state.activeTab === 0)
                    ? <div><div>Horarios</div><SmartTable dataArray={new Array(10).fill({x:1,y:2,z:3})}/></div>
                    : null}
                </div>

                <div>{(this.state.activeTab === 1)
                    ? <div>Colegios</div>
                    : null}
                </div>

            </div>
        );
    }


    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

    parseData() {
        let rawData = this.state.data;
        //transform data here
        this.setState({data: rawData})
    }

    async componentDidMount() {
        this.setState({data: await api.getTeamList()});
        this.parseData()
    }
}


export default ProgramaGeneral;
