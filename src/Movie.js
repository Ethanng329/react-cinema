import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event) {
    // console.log(this.props.image.imdbID)
    fetch(`http://www.omdbapi.com/?i=${this.props.image.imdbID}&apikey=db96ccd2`)
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        const plot = data.Plot;
        console.log(plot);
        this.props.plot(plot);
      })
      .catch(function (error) {
        console.log(error);
        alert("Search Error, please try another search term");
        // something went wrong. let's sort it out
      });
  }



  render() {
    return <div>
      <a className="item" href={`https://www.imdb.com/title/${this.props.image.imdbID}`} >
        <img className="img" src={this.props.image.Poster} alt="" /></a>
      <p onClick={this.handleClick} className="item__name">{this.props.image.Title} ({this.props.image.Year})</p>
    </div>

  }

}





export default Movie;
