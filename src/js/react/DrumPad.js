import React from 'react';
import { Audio } from './Audio.js';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const audId = this.props.id;
    const audSrc = this.props.src;

    return(
        <div className='drum-pad' onClick={() => { document.getElementById(audId).play() }}>
          <p>{audId}</p>
          <Audio id={audId} src={audSrc} />
        </div>
    )
  }
}
