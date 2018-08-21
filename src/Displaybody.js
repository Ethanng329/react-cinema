import React from 'react';
import Movie from './Movie';
import { ENGINE_METHOD_DIGESTS } from 'constants';

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
          return <Movie key={movie.imdbID} image={movie} plot={this.plotReceiver} />

          // <div key={movie.imdbID}  >
          //   <a className="item" href={`https://www.imdb.com/title/${movie.imdbID}`} >
          //     <img className="img" src={movie.Poster} alt="" />
          //   </a>
          //   <p
          //     onClick={this.handleClick} className="item__name">{movie.Title} ({movie.Year})
          //   </p>
          // </div>
        })}
      </ul>
    );
  }
}

export default Displaybody;
