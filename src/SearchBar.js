import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  state = {
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Search Bar"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

export default SearchBar;
