import React from 'react';
import Search from './Search';
import Displaybody from './Displaybody';
import Plot from './Plot';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      plot: 'Click Movie Title for more info.'
    };

    this.jsonReceiver = this.jsonReceiver.bind(this);
    this.plotReceiver = this.plotReceiver.bind(this);
  }

  jsonReceiver(data) {
    this.setState({
      movies: data
    });
  }

  plotReceiver(plot) {
    this.setState({
      plot: plot
    });
    console.log(this.state.plot);
  }

  render() {
    return (
      <div>
        <Search jsonReceiver={this.jsonReceiver} />
        <Displaybody
          movies={this.state.movies}
          plotReceiver={this.plotReceiver}
        />
        <Plot plot={this.state.plot} />
      </div>
    );
  }
}

export default App;
