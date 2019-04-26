import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
    height: '25rem',
    margin: '0.5rem'
  },
  media: {
    flex: 7,
    height: '18rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'flex-end'
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '1rem'
  }
};
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    fetch(
      `https://www.omdbapi.com/?i=${this.props.image.imdbID}&apikey=db96ccd2`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.plot(data.Plot);
      })
      .catch(function(error) {
        console.log(error);
        alert('Search Error, please try another search term');
      });
  }

  render() {
    const { classes } = this.props;
    const { Poster, Title, Year, imdbID } = this.props.image;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`${Poster}`}
          title={Title}
        />
        <Typography className={classes.titleContainer} variant="subtitle1">
          {`${Title} (${Year})`}
        </Typography>
        <CardActions className={classes.buttonContainer}>
          <Button size="small" color="primary" onClick={this.handleClick}>
            Plot
          </Button>
          <Button
            component="a"
            href={`https://www.imdb.com/title/${this.props.image.imdbID}`}
            size="small"
            color="secondary"
          >
            More info
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Movie);
