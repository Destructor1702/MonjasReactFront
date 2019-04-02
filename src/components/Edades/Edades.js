import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import SmartTable from "../../components/SmartTable";

const errorWarning = <div className="notification is-warning">
    <strong>  no existe la categoria seleccionada </strong>
</div>;

class Equipos extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0, genderSelection: props.genderSelection, sportSelection: props.sportSelection};
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
                                                       onClick={() => this.switchTab(i)}><a>{tab}</a></li>)}
                    </ul>
                </div>

                <div>
                    {this.sporTabs[this.state.sportSelection()]} -
                    {this.genderTabs[this.state.genderSelection()]} -
                    {this.tabs[this.state.activeTab]}
                </div>

                <div>{
                    this.errPorr
                        ? errorWarning
                        : <div>Tabla aqui</div>
                }</div>


            </div>
        );
    }


    switchTab(tabNumber) {
        this.setState({activeTab: tabNumber})
    }

}

export default Equipos;
