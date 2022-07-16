import {actions} from '../actions/actionTypes';

let initialState = {
  locations: [],
};

export default homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOCATIONS:
      return {
        ...state,
        locations: action.locations,
      };
  }
  return state;
};
