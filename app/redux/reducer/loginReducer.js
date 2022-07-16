import {actions} from '../actions/actionTypes';

let initialState = {
  userPrefs: null,
};

export default loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_PREFS:
      return {
        ...state,
        userPrefs: action.userPrefs,
      };
    case actions.LOGOUT:
      return {
        ...state,
      };
  }
  return state;
};
