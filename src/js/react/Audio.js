import React from 'react';

export class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.id;
    const src = this.props.src;
    return(
      <>
        <audio id={id} src={src} />
      </>
    )
  }
}
