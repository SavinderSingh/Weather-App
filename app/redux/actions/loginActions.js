import {showAlert} from '../../utils/Message';
import {actions} from './actionTypes';

export const setUserPrefs = data => {
  return async dispatch => {
    dispatch({
      type: actions.USER_PREFS,
      userPrefs: data,
    });
  };
};

export const setLogoutUser = () => {
  return async dispatch => {
    dispatch({
      type: actions.LOGOUT,
      data: null,
    });
  };
};

export const loginUser = code =>
  new Promise((resolve, reject) => {
    const data = {
      uniqueCode: code,
    };
    console.log('[LoginActions.js] loginUser data : ', data);
    AxiosBase.post('candidate/uniquecode', data)
      .then(response => {
        const res = response.data;
        console.log('[LoginActions.js] Response => ', response);
        if (res.message.toUpperCase() === 'CANDIDATE SUCCESSFULLY LOGIN') {
          //   saveUserPref(res.candidateRes);
          //   saveToken(res.token);
          // showAlert('success', 'Login Successfully.');
          resolve(res);
        } else {
          const msg = 'Oops! This is not a correct Interview Code.';
          showAlert('error', msg);
          reject({error: msg});
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
        errorHandler(error);
      });
  });
