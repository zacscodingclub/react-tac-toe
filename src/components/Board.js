import React from 'react';
import Cell from './Cell';

const Board = ({cells, turn, onClick}) => (
  <div className="Board">
    {cells.map((value, i) =>
      <Cell key={i} value={value} id={i} onClick={onClick}/>
    )}
  </div>
)

export default Board;
