import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import { updatePortfolioProps } from '../store/actions';
import AppBarContainer from './appBar/container-appBar';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const Main = (props) => {
  const {
    updatePortfolioProp,
  } = props;

  const sharedProps = {
    updatePortfolioProp,
  };

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBarContainer
          {...sharedProps}
        />
      </div>
    </MuiThemeProvider>
  );
};

Main.propTypes = {
  updatePortfolioProp: PropTypes.func,
};

const mapStateToProps = ({ portfolio }) => ({
  portfolioReducer: portfolio.toJS(),
});

const mapDispatchToProps = dispatch => ({
  updatePortfolioProp: (...args) => dispatch(updatePortfolioProps(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
