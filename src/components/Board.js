import React from 'react';
import Cell from './Cell';

const Board = ({cells, turn}) => (
  <div className="Board">
    {cells.map((value, i) =>
      <Cell key={i} value={value} />
    )}
  </div>
)

export default Board;
