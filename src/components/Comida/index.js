import React from 'react';
import 'bulma/css/bulma.css'


const Comida = () => {

    return (
        <div className="card has-shadow has-addons-centered has-text-left">
            <h1 className="title">Costo de los alimentos</h1>

            <div className="content column is-6 is is-offset-2">
                <ol type="1">
                    <li>
                        <div>PUESTO DE HAMBURGUESAS Y HOTDOGS</div>
                        <table className="table is-narrow is-striped is-bordered
">
                            <tbody>
                            <tr>
                                <td>HAMBURGUESA</td>
                                <td>$45.00</td>
                            </tr>
                            <tr>
                                <td>HOT DOG</td>
                                <td>$20.00</td>
                            </tr>
                            <tr>
                                <td>PAPAS A LA FRANCESA ORDEN</td>
                                <td>$40.00</td>
                            </tr>
                            <tr>
                                <td>PAPAS A LA FRANCESA 1/2 ORDEN</td>
                                <td>$25.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>


                    <li>
                        <div>PUESTO DE TACOS DE BARBACOA Y GORDITAS DE GUISADO</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>TACO</td>
                                <td>$12.00</td>
                            </tr>
                            <tr>
                                <td>GORDITA</td>
                                <td>$15.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE TACOS DE GUISADO</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>TACO</td>
                                <td>$10.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE LONCHES DE PIERNA</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>LONCHE</td>
                                <td>$30.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE TORTAS AHOGADAS Y TACO DORADO</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>1 TORTA AHOGADA Y 1 TACO</td>
                                <td>$32.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE NIEVES Y TEJUINO</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>TEJUINO GRANDE</td>
                                <td>$20.00</td>
                            </tr>
                            <tr>
                                <td>TEJUINO CHICO</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>NIEVE RASPADA GRANDE</td>
                                <td>$20.00</td>
                            </tr>
                            <tr>
                                <td>NIEVE CHICA</td>
                                <td>$15.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE FRUTAS Y POSTRES</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>FRUTA BOTE 1LT</td>
                                <td>30.00</td>
                            </tr>
                            <tr>
                                <td>FRUTA BOTE 1/2LT</td>
                                <td>20.00</td>
                            </tr>
                            <tr>
                                <td>CHOCOMILK</td>
                                <td>10.00</td>
                            </tr>
                            <tr>
                                <td>CAFE DE OLLA</td>
                                <td>10.00</td>
                            </tr>
                            <tr>
                                <td>EMPANADAS</td>
                                <td>8.00</td>
                            </tr>
                            <tr>
                                <td>DONAS</td>
                                <td>13.00</td>
                            </tr>
                            <tr>
                                <td>JERICAYAS</td>
                                <td>15.00</td>
                            </tr>
                            <tr>
                                <td>TARTALETAS</td>
                                <td>15.00</td>
                            </tr>
                            <tr>
                                <td>GELATINAS</td>
                                <td>10.00</td>
                            </tr>
                            <tr>
                                <td>PASTEL DE CHOCOLATE</td>
                                <td>15.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>


                    <li>
                        <div>PUESTO DE BEBIDAS Y BOTANAS</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>AGUA FRESCA SABORES 1LT</td>
                                <td>$20.00</td>
                            </tr>
                            <tr>
                                <td>AGUA FRESCA SABORES 1/2LT</td>
                                <td>$12.00</td>
                            </tr>
                            <tr>
                                <td>REFRESCO COCA COLA 600ML</td>
                                <td>$17.00</td>
                            </tr>
                            <tr>
                                <td>REFRESCO SABOR 600ML</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>AGUA EMBOTELLADA 1LT</td>
                                <td>$13.00</td>
                            </tr>
                            <tr>
                                <td>AGUA EMBOTELLADA 1/2LT</td>
                                <td>$10.00</td>
                            </tr>
                            <tr>
                                <td>BOLSA DE PAPAS</td>
                                <td>$20.00</td>
                            </tr>
                            <tr>
                                <td>BOLSA DE DURITOS</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>BOLSA DE CHURRITOS</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>BOLSA DE PLATANOS FRITOS</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>PALETA DE HIELO</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>NIEVE DE SAVORES DE LECHE</td>
                                <td>$15.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE CREPAS</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>CREPAS</td>
                                <td>$30.00</td>
                            </tr>
                            <tr>
                                <td>INGREDIENTE EXTRA</td>
                                <td>$5.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                    <li>
                        <div>PUESTO DE COMIDA TIPICA</div>
                        <table className="table is-narrow is-striped is-bordered">
                            <tbody>
                            <tr>
                                <td>CHILE RELLENO CON ARROZ Y FRIJOLES</td>
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>PESCADO (TACOS)</td>
                                <td>TACO $20.00 / PLATILLO $60</td>
                            </tr>
                            <tr>
                                <td>TORTAS DE PAPA Y CHAYOTE (PLATILLO)</td>
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>MOYETES DE QUESO Y FRIJOLES</td>
                                <td>$18.00</td>
                            </tr>
                            <tr>
                                <td>CHILAQUITES CON FRIJOLES</td>
                                <td>$50.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </li><br/><br/>

                </ol>
            </div>

        </div>
    );

};

export default Comida

