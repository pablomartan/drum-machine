import React from 'react';
import { Audio } from './Audio.js';

/**
 * @description: a drumpad. It can be played by clicking it or pressing the key
 * it displays
 */
export class DrumPad extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = e => {
    e.preventDefault();
    let targ = e.target;
    if (targ.nodeName != 'DIV') {
      targ = targ.parentElement;
    }
    document.getElementById(this.props.audId).play();
    document.getElementById('display').innerText = this.props.id;
    targ.classList.toggle('play');
    setTimeout(() => targ.classList.toggle('play'), 1000);
  }

  render() {
    const audId = this.props.audId;
    const audSrc = this.props.src;
    
    return(
        <div className='drum-pad d-flex justify-content-center align-items-center shadow' id={this.props.id} onClick={this.handleClick}>
          <p className='m-auto'>{audId}</p>
          <Audio id={audId} src={audSrc} />
        </div>
    )
  }
}
