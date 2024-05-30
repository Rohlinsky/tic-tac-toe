import React from 'react';
import {
  Player,
  UnknownPlayer
} from '../types';

interface State {}

interface Props {
  player: Player;
  onClick: () => void;
  isHighlighted: boolean;
  value: UnknownPlayer;
}

class Cell extends React.Component<Props, State> {
  constructor(props: Props) {
  	super(props);
  }

  get getCellStyle() {
    return {
      color: this.props.isHighlighted ? "#fff" : "",
      background: this.props.isHighlighted ? "#444" : ""
    }
  }

  render() {
  	return(
      <div
        className="cell cell-1"
        style={this.getCellStyle}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </div>
  	);
  }
}

export default Cell;