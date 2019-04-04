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
                    ? <div>
                        <h3 className="title">Colegios Participantes</h3>
                        <SmartTable
                            ignoreKeys={[]}
                            dataArray={[
                            {
                                "Nombre del Colegio": "Colegio América",
                                "Ciudad": "Acuña Coah.",
                                "Directora General": "S. Concepción Villagrán"
                            },
                            {
                                "Nombre del Colegio": "Colegio Salesiano",
                                "Ciudad": "Cd. Obregón",
                                "Directora General": "S. Isabel Muñiz"
                            },
                            {
                                "Nombre del Colegio": "Colegio Cuauhtémoc",
                                "Ciudad": "Colima",
                                "Directora General": "S. María Patricia Magaña"
                            },
                            {
                                "Nombre del Colegio": "Colegio Independencia",
                                "Ciudad": "Guadalajara",
                                "Directora General": "S. Verónica Gutiérrez"
                            },
                            {
                                "Nombre del Colegio": "Colegio Modelo",
                                "Ciudad": "Linares, N.L.",
                                "Directora General": "S. Myrna E. Rodríguez"
                            },
                            {
                                "Nombre del Colegio": "Colegio Excélsior",
                                "Ciudad": "Monterrey, N.L.",
                                "Directora General": "S. Graciela Castaño"
                            },
                            {
                                "Nombre del Colegio": "Instituto Excélsior",
                                "Ciudad": "Monterrey, N.L.",
                                "Directora General": "S. Cristina Puntos"
                            },
                            {
                                "Nombre del Colegio": "Colegio Independencia",
                                "Ciudad": "Monterrey, N.L.",
                                "Directora General": "S. Norma Alicia Rentería"
                            },
                            {
                                "Nombre del Colegio": "Instituto Colón",
                                "Ciudad": "Reynosa, Tamps.",
                                "Directora General": "S. María Ibis García"
                            },
                            {
                                "Nombre del Colegio": "Instituto de Valle Arizpe",
                                "Ciudad": "Saltillo, Coah.",
                                "Directora General": "S. Ma. Pueblito Morales"
                            },
                            {
                                "Nombre del Colegio": "Aldea Infantil Pepita de Valle Arizpe",
                                "Ciudad": "Saltillo, Coah.",
                                "Directora General": "S. Soraida Moreno"
                            },
                            {
                                "Nombre del Colegio": "Colegio  Maestras de la Fuente",
                                "Ciudad": "Saltillo, Coah.",
                                "Directora General": "Lic. Themis Selene Brambila Ledezma"
                            },
                            {
                                "Nombre del Colegio": "Colegio Joannes Paulus II",
                                "Ciudad": "San Luis Potosí",
                                "Directora General": "S. María Eugenia Ugalde"
                            },
                            {
                                "Nombre del Colegio": "Juan Melchor Occhiena",
                                "Ciudad": "Tesistan, Jal.",
                                "Directora General": "S. Martha Nelly Mozo"
                            }
                        ]} />
                    </div>

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
