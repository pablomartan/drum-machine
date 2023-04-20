import React from 'react';
import { DrumPadContainer } from './DrumPadContainer.js';
import { Display } from './Display.js';

export class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='drum-machine' className='d-flex col-12 col-md-8 col-lg-6 col-xl-5 justify-content-between shadow-lg'>
        <DrumPadContainer onKeyPress={this.props.keypress} />
        <Display sample={this.props.sample} />
      </div>
    )
  }
}
