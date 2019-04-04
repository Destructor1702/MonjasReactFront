import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import api from "../../api"
import SmartTable from "../../components/SmartTable";

const errorWarning = <div className="notification is-warning">
    <strong> no existe la categoria seleccionada </strong>
</div>;

class Equipos extends Component {
    constructor(props) {
        super(props);
        this.tabs = ["Infantil A", "Infantil B", "Juvenil A", "Juvenil B", "Juvenil C", "libre", "Todos"];
        this.state = {
            activeTab: this.tabs.length-1,
            genderSelection: props.genderSelection,
            sportSelection: props.sportSelection,
            loading: true,
            gender: "Todos",
            sport: "Todos",
            league: "Todos"
        };

        this.genderTabs = ["Varonil", "Femenil", "Todos"];
        this.sporTabs = ["Basquetbol", "Futbol", "Volleyball", "Porristas", "Todos"];
        this.errPorr = false;
    }

    render() {
        this.errPorr = (this.state.genderSelection() === 0 && this.state.sportSelection() === 3);


        return (
            <div>

                {this.state.sportSelection() === 3
                    ? <div>Porristas</div>
                    : <div className="tabs ">
                        <ul>
                            {this.tabs.map((tab, i) => <li
                                key={i}
                                className={i === this.state.activeTab ? "is-active" : ""}
                                // eslint-disable-next-line
                                onClick={() => this.switchTab(i)}><a>{tab}</a>
                            </li>)}
                        </ul>
                    </div>
                }

                <strong>
                    {this.state.sport}
                    {" - "} {this.state.gender}
                    {" - "}
                    {
                        this.state.sportSelection() === 3
                            ? null
                            : this.state.league
                    }
                </strong>

                <div>{
                    this.errPorr
                        ? errorWarning
                        : <div className="has-text-centered">

                            {this.state.sportSelection() === 3
                                ? <SmartTable
                                    ignoreKeys={["createdAt", "updatedAt", "equipoUnoId", "id", "uuid"]}
                                    dataArray={this.state.porristas}
                                    loading={this.state.loading}
                                />

                                : this.state.parsedGames
                                && this.state.parsedGames.map((entry, i) => (
                                    this.matches(entry[0]["categorium.genero"], this.state.gender)
                                    && this.matches(entry[0]["categorium.deporte"], this.state.sport)
                                    && this.matches(entry[0]["categorium.categoria"], this.state.league)


                                ) ? <SmartTable
                                        ignoreKeys={["createdAt", "updatedAt", "equipoUnoId", "equipoDosId",
                                            "Id", "userId", "equipoUno.uuid", "equipoDos.uuid", "id", "uuid",
                                            "ganadorId", "eventoId", "estado", "categoriumId", "ganador.uuid"]}
                                        key={i}
                                        dataArray={entry}
                                        loading={this.state.loading}
                                    />
                                    : null)
                                //endif porristas
                            }
                        </div>
                    //endif
                }</div>
            </div>
        );
    }


    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
        this.setState({
            gender: this.genderTabs[this.state.genderSelection()],
            sport: this.sporTabs[this.state.sportSelection()],
            league: this.tabs[this.state.activeTab]
        });
    }


    async parseData() {
        let cats = this.state.categories && this.state.categories.map(cat => (cat.uuid));
        await Promise.all(cats.map(cat => api.getGameInfo(cat))).then(x => this.setState({parsedGames: x}));

    }

    async componentDidMount() {
        this.setState({
            categories: await api.getCategories(),
            eventInfo: await api.getEventInfo(),
            gameInfo: await api.getGameInfo(),
            porristas: await api.getPorristas(),
            parsedGames: undefined
        });

        this.parseData();
        this.setState({loading: false})
    }

    matches(a, b) {
        if (!a && !b) {
            return true
        }
        if ((a === "masculino" || b === "masculino") && (a === "Varonil" || b === "Varonil")) {
            return true
        }
        return (["", "Todos"].includes(b))
            ? true
            : a.toUpperCase() === b.toUpperCase()
    }
}

export default Equipos;
