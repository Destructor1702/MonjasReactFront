import React from 'react';
import 'bulma/css/bulma.css'

const errorWarning = <div className="notification is-warning">
    <strong> error </strong> al consultar la informacion
</div>;

const SmartTable = ({dataArray, loading, ignoreKeys}) => {

    if (loading) {
        return <div className="notification">
            <br/><br/><strong> Cargando... </strong><br/><br/>
        </div>
    }

    if (!dataArray || !dataArray.length) {
        return errorWarning
    }

    let objKeys = Object.keys(dataArray[0]);

    return <table className="table is-bordered is-narrow is-hoverable  is-fullwidth">

        <thead>
        <tr className="is-selected">
            {objKeys.map(key => (ignoreKeys.includes(key)) ? null : <th key={key}>{
                key.replace("categorium.","")
                    .replace("Uno"," 1")
                    .replace("Dos"," 2")
                    .replace("Equipo"," Equipo ")
                    .replace("."," ")
            }</th>)}
        </tr>
        </thead>

        <tbody>
        {dataArray.map((entry, i) => <tr key={i}>
                {objKeys.map(key => (ignoreKeys.includes(key))
                    ? null
                    : <th key={`${key}${i}`}>{entry[key]}</th>)
                }
            </tr>
        )}
        </tbody>

    </table>
};

export default SmartTable;

