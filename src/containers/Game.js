import React, { Component } from 'react';
import Board from '../components/Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: new Array(9).fill(" ")
    }

    this.handleClick = this.handleClick.bind(this);
    this.placeToken = this.placeToken.bind(this);
    this.currentPlayer = this.currentPlayer.bind(this);
  }

  handleClick(e) {
    const cellNumber = parseInt(e.target.id);

    this.setState({
      cells: this.placeToken(cellNumber)
    });
  }

  placeToken(cellNumber) {
    return this.state.cells.map((c, index) => {
      return index === cellNumber ? c = this.currentPlayer() : c;
    });
  }

  currentPlayer() {
    const openSpaces = this.state.cells.filter( c => c === " ").length;
    return openSpaces % 2 === 0 ? "O" : "X";
  }

  render() {
    return (
      <div className="Game">
        <Board {...this.state} onClick={this.handleClick} />
      </div>
    )
  }
}

export default Game;
