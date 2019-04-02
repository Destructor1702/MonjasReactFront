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
        this.state = {
            activeTab: 0,
            genderSelection: props.genderSelection,
            sportSelection: props.sportSelection,
            loading: true
        };
        this.tabs = ["Infantil A", "Infantil B", "Juvenil A", "Juvenil B", "Juvenil C", "libre"];
        this.genderTabs = ["Varonil", "Femenil"];
        this.sporTabs = ["Basquetbol", "Futbol", "Volleyball", "Porristas"];
        this.errPorr = false;
    }

    render() {
        this.errPorr = (this.state.genderSelection() === 0 && this.state.sportSelection() === 3);
        return (
            <div>

                <div className="tabs">
                    <ul>
                        {this.tabs.map((tab, i) => <li className={i === this.state.activeTab ? "is-active" : ""}
                            // eslint-disable-next-line
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>

                <strong>
                    {this.sporTabs[this.state.sportSelection()]}
                    - {this.genderTabs[this.state.genderSelection()]}
                    - {this.tabs[this.state.activeTab]}
                </strong>

                <div>{
                    this.errPorr
                        ? errorWarning
                        : <div className="has-text-centered">
                            <div>teamList</div>
                            <SmartTable dataArray={this.state.teamList} loading={this.state.loading}/>
                            <div>cataegories</div>
                            <SmartTable dataArray={this.state.categories} loading={this.state.loading}/>
                            <div>Eventos</div>
                            <SmartTable dataArray={this.state.eventInfo} loading={this.state.loading}/>
                            <div>GameInfo</div>
                            <SmartTable dataArray={this.state.gameInfo} loading={this.state.loading}/>
                        </div>
                }</div>


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
        this.setState({
            teamList: await api.getTeamList(),
            categories: await api.getCategories(),
            eventInfo: await api.getEventInfo(),
            gameInfo: await api.getGameInfo()
        });
        this.parseData();
        this.setState({loading: false})
    }

}

export default Equipos;
