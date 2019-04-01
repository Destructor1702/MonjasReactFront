import React from 'react';
import 'bulma/css/bulma.css'

const errorWarning = <div className="notification is-warning">
    <strong> error </strong> ha ocurrido un error al consultar la informacion
</div>;

const SmartTable = ({dataArray}) => {
    if (!dataArray.length) {
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
        {dataArray.map(entry => <tr>
            {objKeys.map(key => <th>{entry[key]}</th>)}
            </tr>

        )}
        </tbody>

    </table>
};

export default SmartTable;