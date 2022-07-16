import axios from 'axios';
import AxiosBase from '../network/AxiosBase';
import {WEATHER_API_KEY} from '../network/NetworkConstants';
import {actions} from './actionTypes';

export const setLocations = list => {
  return async dispatch => {
    dispatch({
      type: actions.LOCATIONS,
      locations: list,
    });
  };
};

export const getWetherData = location =>
  new Promise((resolve, reject) => {
    console.log('[HomeActions.js] getCurrentWeather data : ', location);
    AxiosBase.get(
      `forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=10&aqi=no&alerts=no`,
    )
      .then(response => {
        console.log('[HomeActions.js] => ', response.data);

        resolve(response.data);
      })
      .catch(error => {
        console.log('[HomeActions.js] => ', error);
        reject(error);
      });
  });

export const getCurrentWeather = location =>
  new Promise((resolve, reject) => {
    console.log('[HomeActions.js] getCurrentWeather data : ', location);
    AxiosBase.get(`current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=yes`)
      .then(response => {
        console.log('[HomeActions.js] => ', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('[HomeActions.js] => ', error);
        reject(error);
      });
  });
