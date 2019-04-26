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
    backgroundColor: '#dbdbdb'
  }
};
class Plot extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <PaperContainer>
        <Paper className={classes.text}>Plot:{this.props.plot}</Paper>
      </PaperContainer>
      // <div className="plotfooter">
      //   <p>Plot:{this.props.plot}</p>
      // </div>
    );
  }
}

export default withStyles(style)(Plot);
