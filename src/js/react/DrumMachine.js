import React from 'react';
import { DrumPadContainer } from './DrumPadContainer.js';
import { Display } from './Display.js';

export class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='drum-machine' className='d-flex col-6 justify-content-between'>
        <DrumPadContainer onKeyPress={this.props.keypress} />
        <Display sample={this.props.sample} />
      </div>
    )
  }
}
