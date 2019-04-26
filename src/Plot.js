import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

const PaperContainer = styled.div`
  display: flex;
  height: 9vh;
  justify-items: center;
`;

const style = {
  text: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#dbdbdb',
    padding: '1rem',
    fontFamily: 'roboto'
  }
};
class Plot extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <PaperContainer>
        <Paper className={classes.text}>Plot:{this.props.plot}</Paper>
      </PaperContainer>
    );
  }
}

export default withStyles(style)(Plot);
