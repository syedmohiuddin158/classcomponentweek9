// ToggleModeComponent.js
import './App.css';
import React from 'react';
import Sad from './Sad.png';
import Happy from './Happy.png';

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: Happy };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
    this.mode = "happy";
  }

  Toggle_Mode() {
    this.setState((prevState) => {
      if (prevState.pic === Sad) {
        this.mode = "happy";
        return { pic: Happy };
      } else {
        this.mode = "sad";
        return { pic: Sad };
      }
    });
  }

  render() {
    return (
      <div>
        <h3>This is output of Task2: {this.mode}</h3>
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt="" />
        </button>
      </div>
    );
  }
}

export default ToggleMode;
