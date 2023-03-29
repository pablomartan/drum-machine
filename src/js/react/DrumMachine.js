import React from 'react';
import { DrumPadContainer } from './DrumPadContainer.js';
import { Display } from './Display.js';

export class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    document.body.addEventListener('keypress', e => {
      const k = e.key.toUpperCase();
      try {
        document.getElementById(k).play();
      } catch (e) {
        console.log(e);
      }
    });

    return(
      <div id="drum-machine">
        <DrumPadContainer />
        <Display />
      </div>
    )
  }
}
