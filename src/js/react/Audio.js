import React from 'react';

/**
 * @description: Component for the audio element; the id is the name of a
 * keyboard key ('Q', 'W'...) and the src is a URL to an audio file
 *
 * @component
 * @example
 * const id = 'Q';
 * const src = 'http://somehting.org/sounds/kick.mp3';
 * return(<Audio id={id} src={src} />)
 *
 */
export class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /** The audio element's id */
    const id = this.props.id;

    /** The audio element's src */
    const src = this.props.src;

    return(
      <>
        <audio id={id} className="clip" src={src} />
      </>
    )
  }
}
