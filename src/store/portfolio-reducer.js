import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({

});

export default function portfolio(state = initialState, { type, payload }) {
  switch (type) {
    case constants.UPDATE_PROP:
      return state.merge(fromJS(payload));
    default:
      return state;
  }
}
