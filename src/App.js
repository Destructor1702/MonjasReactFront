import React, {Component} from 'react';


import 'bulma/css/bulma.css'

class App extends Component {
    render() {
        return (
            <div className="column card is-8 is-offset-2 hero has-text-centered has-shadow">
                <div className="hero-head">
                    <div className="  title">boilerplate</div>
                    <div className="box cta">
                        <div className="columns is-mobile is-centered">
                            <div className="field is-grouped is-grouped-multiline">
                                <div className="control"><span className="tag is-link is-large">Link</span></div>
                                <div className="control"><span className="tag is-success is-large">Success</span></div>
                                <div className="control"><span className="tag is-black is-large">Black</span></div>
                                <div className="control"><span className="tag is-warning is-large">Warning</span></div>
                                <div className="control"><span className="tag is-danger is-large">Danger</span></div>
                                <div className="control"><span className="tag is-info is-large">Info</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">


                    <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
                        <thead>
                        <tr className="is-selected">
                            <th><abbr title="Position">Pos</abbr></th>
                            <th>Team</th>
                            <th><abbr title="Played">Pld</abbr></th>
                            <th><abbr title="Won">W</abbr></th>
                            <th><abbr title="Drawn">D</abbr></th>
                            <th><abbr title="Lost">L</abbr></th>
                            <th><abbr title="Goals for">GF</abbr></th>
                            <th><abbr title="Goals against">GA</abbr></th>
                            <th><abbr title="Goal difference">GD</abbr></th>
                            <th><abbr title="Points">Pts</abbr></th>
                            <th>Qualification or relegation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester
                                City</a> <strong>(C)</strong>
                            </td>
                            <td>38</td>
                            <td>23</td>
                            <td>12</td>
                            <td>3</td>
                            <td>68</td>
                            <td>36</td>
                            <td>+32</td>
                            <td>81</td>
                            <td>Qualification for the <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a>
                            </td>
                            <td>38</td>
                            <td>20</td>
                            <td>11</td>
                            <td>7</td>
                            <td>65</td>
                            <td>36</td>
                            <td>+29</td>
                            <td>71</td>
                            <td>Qualification for the <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                                   title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                            <td>38</td>
                            <td>19</td>
                            <td>13</td>
                            <td>6</td>
                            <td>69</td>
                            <td>35</td>
                            <td>+34</td>
                            <td>70</td>
                            <td>Qualification for the <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                                title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                                   title="Manchester City F.C.">Manchester
                                City</a></td>
                            <td>38</td>
                            <td>19</td>
                            <td>9</td>
                            <td>10</td>
                            <td>71</td>
                            <td>41</td>
                            <td>+30</td>
                            <td>66</td>
                            <td>Qualification for the <a
                                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
                                title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
                        </tr>

                        </tbody>
                    </table>

                </div>
                <div className="column is-3 is-narrow">
                    <article className="message is-warning has-shadow">
                        <div className="message-header">
                            <p>Season 1</p>
                            <button className="delete" aria-label="delete"/>
                        </div>
                        <div className="message-body">
                            <div className="board-item">
                                <div className="board-item-content"><span>The Fort</span></div>
                            </div>
                            <div className="board-item">
                                <div className="board-item-content"><span>Fist Like a bullet</span></div>
                            </div>
                            <div className="board-item">
                                <div className="board-item-content"><span>White Stork Spreads Wings</span></div>
                            </div>
                            <div className="board-item">
                                <div className="board-item-content"><span>Two Tigers Subdue Dragons</span></div>
                            </div>
                            <div className="board-item">
                                <div className="board-item-content"><span>Snake Creeps Down</span></div>
                            </div>
                            <div className="board-item">
                                <div className="board-item-content"><span>Hand of Five Poisons</span></div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default App;
