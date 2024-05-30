import React from 'react';
import Cell from './Cell';
import {
  Player,
  UnknownPlayer
} from '../types';

interface State {
  queue: Player;
}

interface Props {
  setPlayerLastMove: (
    position: number,
    player: Player
  ) => void;
  highlighted: string;
  matrix: UnknownPlayer[];
}

class Board extends React.Component<Props, State> {
  constructor(props: Props) {
  	super(props);

    this.state = {
      queue: "x"
    }
  }

  render() {
  	return(
      <div className="board" >
        {
          this.props.matrix.map((c, i) =>
            <Cell
              key={"cell-" + i}
              player={this.state.queue}
              value={c}
              isHighlighted={this.props.highlighted.includes(i.toString())}
              onClick={() => {
                const isBlocked = !!(this.props.highlighted);
                const hasValue = !!(c);

                if (!hasValue && !isBlocked) {
                  const nextPlayer = this.state.queue === "x" ? "o" : "x";
                  this.setState({ queue: nextPlayer });
                  this.props.setPlayerLastMove(i, this.state.queue);
                }
              }}
            />
          )
        }
      </div>
  	);
  }
}

export default Board;