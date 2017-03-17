import * as constants from './constants';

export function updatePortfolioProps(payload) {
  return { type: constants.UPDATE_PORTFOLIO_PROP, payload };
}
