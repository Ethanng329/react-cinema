import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const that = this;

    fetch(`https://www.omdbapi.com/?s=${this.state.input}&apikey=db96ccd2`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        that.props.jsonReceiver(data.Search.map(item => item));
      })
      .catch(function(error) {
        console.log(error);
        alert('Search Error, please try another search term');
        // something went wrong. let's sort it out
      });
  }

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
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
