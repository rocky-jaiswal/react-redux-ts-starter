import * as React from 'react';

import './styles.css';

interface Props {
  width: number;
  height: number;
}

const GameArea: React.SFC<Props> = (props) => {
  return (
    <div
      id="main-game-area"
      className="game-area"
      style={{ width: `${props.width}%`, height: `${props.height}%` }}
    >
      <span />
    </div>
  );
};

export default GameArea;
