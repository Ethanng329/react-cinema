import React from 'react';
import Movie from './Movie';

class Displaybody extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.plotReceiver = this.plotReceiver.bind(this);
  }
  handleClick(event) {
    console.log(event.target);
  }

  plotReceiver(plot) {
    this.props.plotReceiver(plot);
  }

  render() {
    return (
      <ul className="resultDisplay" id="displayresult">
        {this.props.movies.map(movie => {
          return (
            <Movie key={movie.imdbID} image={movie} plot={this.plotReceiver} />
          );
        })}
      </ul>
    );
  }
}

export default Displaybody;
