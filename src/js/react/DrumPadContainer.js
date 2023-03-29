import React from 'react';
import { DrumPad } from './DrumPad.js';

export class DrumPadContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const links = [
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    ];

    const letters = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C' ];

    return(
    <div id='pad-container'>
      {letters.map((l, i) => {
        return(<DrumPad key={i} id={l} src={links[i]} />);
      })}
    </div>
    )
  }
}
