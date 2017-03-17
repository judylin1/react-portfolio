import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePortfolioProp } from '../store/actions';
import { deepOrange500 } from 'material-ui/styles/colors';
import AppBarContainer from './appBar/container';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBarContainer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ portfolio }) => ({
  portfolioReducer: portfolio.toJS(),
});

export default connect(mapStateToProps)(Main);
