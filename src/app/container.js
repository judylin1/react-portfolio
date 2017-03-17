import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import { updatePortfolioProp } from '../store/actions';
import AppBarContainer from './appBar/container';

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
