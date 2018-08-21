import React from 'react';

class Plot extends React.Component {
  render() {
    return (
      <div className="plotfooter">
        <p>Plot:{this.props.plot}</p>
      </div>

    )

  }
}


export default Plot;