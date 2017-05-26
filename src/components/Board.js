import React from 'react';
import Cell from './Cell';

const Board = ({cells, turn}) => (
  <div>
    {cells.map((value, i) =>
      <Cell key={i} value={value} />
    )}
  </div>
)

export default Board;
