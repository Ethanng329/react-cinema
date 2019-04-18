import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
  state = {
    input: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
        <form>
          <Typography variant="h3" gutterBottom color="primary">
            OMDB Movie Search Engine
          </Typography>
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
