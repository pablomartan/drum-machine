import React from 'react';

/**
 * @description: displays a string detailing the last played sample
 * @component
 */
export class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='display-container'>
        <p id='display' className='text-center'>
          {this.props.sample}
         </p>
      </div>
    )
  }
}
