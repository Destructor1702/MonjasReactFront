import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import api from "../../api";
import SmartTable from "../SmartTable";
import schImg from "../../assets/schedule.jpg";


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
                    <p>Bienvenido a los XXI Juegos Intersalesianos, en este apartado podrás obtener información
                        referente al evento, ya sea sobre el mismo, o sobre los equipos que participarán en las
                        diferentes categorias deportivas.
                        <br/><br/>
                        Elige una de las opciones de acuerdo a la informacion que deseas consultar.
                    </p>

                </div>
                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li
                            key={i}
                            className={i === this.state.activeTab ? "is-active" : ""}
                            // eslint-disable-next-line
                            onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>

                <div>{(this.state.activeTab === 0)
                    ? <div className="card has-shadow">
                        <figure className="image">
                            <img src={schImg} alt="horario"/>
                        </figure>
                    </div>

                    : null

                }
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
