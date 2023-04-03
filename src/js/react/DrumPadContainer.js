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

    const letterSampleMap = {
      'Q': 'Heater 1',
      'W': 'Heater 2',
      'E':'Heater 3',
      'A': 'Heater 4',
      'S': 'Clap',
      'D': 'Open-HH',
      'Z': 'Kick-n\'-hat',
      'X': 'Kick',
      'C': 'Closed-HH',
    }

    const letters = Object.keys(letterSampleMap);
    
    document.body.addEventListener('keypress', e => {
      const k = e.key.toUpperCase();
      if (letters.includes(k)) {
        const audio = document.getElementById(k);
        const pad = audio.parentElement;
        audio.play();
        document.getElementById('display').innerText = letterSampleMap[k];
        // set pad's class to play to appear to be pressed;
        pad.classList.toggle('play');
        setTimeout(() => pad.classList.toggle('play'), 500);
      }
    });


    return(
    <div id='pad-container'>
      {letters.map((l, i) => {
        return(<DrumPad key={i} id={letterSampleMap[l]}
              audId={l} src={links[i]} />);
      })}
    </div>
    )
  }
}
