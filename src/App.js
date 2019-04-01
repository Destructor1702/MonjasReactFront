import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import SmartTable from "./components/SmartTable";

class App extends Component {
    render() {
        return (
            <div className="hero has-text-centered has-shadow">
                <div className="hero-head">

                    <div className="title">boilerplate</div>
                </div>

                <div className="hero-body">
                    <SmartTable dataArray={[{"a": 0, "b": 0, "c": 0}]}/>
                </div>
            </div>
        );
    }
}

export default App;
