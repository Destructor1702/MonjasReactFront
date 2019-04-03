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
                        {this.tabs.map((tab, i) => <li key={i} className={i === this.state.activeTab ? "is-active" : ""}
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


                            <div>categories => Game</div>
                            {this.state.parsedGames && this.state.parsedGames.map((e, i) => <SmartTable
                                key={i}
                                dataArray={e}
                                loading={this.state.loading}
                            />)}

                            <div>Porristas</div>
                            <SmartTable dataArray={this.state.porristas} loading={this.state.loading}/>


                        </div>
                }</div>


            </div>
        );
    }


    switchTab(tabNumber) {this.setState({activeTab: tabNumber})}


    parseData() {
        let cats = this.state.categories && this.state.categories.map(cat => (cat.uuid));
        let relGames = cats.map(async cat => await api.getGameInfo(cat));
        this.setState({parsedGames: relGames})
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

}

export default Equipos;
