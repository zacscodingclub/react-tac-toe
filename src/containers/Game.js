import React, { Component } from 'react';
import Board from '../components/Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: new Array(9).fill(" "),
      turn: "X"
    }
  }

  render() {
    return (
      <div className="Game">
        <Board {...this.state} />
      </div>
    )
  }
}

export default Game;
