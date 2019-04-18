import React from 'react';
import Button from '@material-ui/core/Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch(`/OMDB/${this.state.input}`)
      .then(res => res.json())
      .then(data => {
        const movies = data.Search.map(item => item);
        this.props.jsonReceiver(movies);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="headerBlock">
        <form onSubmit={this.handleSubmit} className="searchfield">
          <h1>Movie Title Search Engine</h1>
          <input
            onChange={this.handleChange}
            className="inputtext"
            type="text"
            placeholder="Search here"
            value={this.state.input}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;
