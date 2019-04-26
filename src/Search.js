import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const styles = {
  header: {
    marginTop: '3rem'
  },
  textField: {
    backgroundColor: 'white',
    opacity: '0.7',
    flex: 6
  },
  button: {
    marginLeft: '1rem',
    flex: 1
  }
};

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class Search extends React.Component {
  state = {
    input: '',
    name: ''
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
    const { classes } = this.props;
    return (
      <div className="headerBlock">
        <form onSubmit={this.handleSubmit}>
          <Typography
            className={classes.header}
            variant="h3"
            gutterBottom
            color="primary"
          >
            OMDB Movie Search Engine
          </Typography>
          <SearchBarContainer>
            <TextField
              label="Movie Title"
              className={classes.textField}
              value={this.state.input}
              onChange={this.handleChange('input')}
              variant="filled"
              InputProps={{
                className: classes.inputText
              }}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
          </SearchBarContainer>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
