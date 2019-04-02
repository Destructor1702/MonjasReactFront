import React from 'react';
import 'bulma/css/bulma.css'

const errorWarning = <div className="notification is-warning">
    <strong> error </strong> al consultar la informacion
</div>;

const SmartTable = ({dataArray, loading}) => {
    if (loading) {
        return <div className="notification">
            <br/><br/><strong> Cargando </strong><br/><br/>
        </div>
    }

    if (!dataArray || !dataArray.length) {
        return errorWarning
    }

    let objKeys = Object.keys(dataArray[0]);

    return <table className="table is-bordered is-narrow is-hoverable ">

        <thead>
        <tr className="is-selected">
            {objKeys.map(key => <th>{key}</th>)}
        </tr>
        </thead>

        <tbody>
        {dataArray.map((entry,i) => <tr key={i}>
                {objKeys.map(key => <th>{entry[key]}</th>)}
            </tr>
        )}
        </tbody>

    </table>
};

export default SmartTable;