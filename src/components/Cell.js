import React from 'react';

const Cell = ({ id, value, onClick }) => {
  return (
    <div className="Cell" id={id} onClick={onClick}>
      {value}
    </div>
  )
}

export default Cell;
