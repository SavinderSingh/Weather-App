// https://invoice.gmeplay.com/index.php/api/common/state/101

import axios from 'axios';
import {API_BASE_URL} from './NetworkConstants';

const AxiosBase = axios.create({
  baseURL: API_BASE_URL,
});

// AxiosBase.interceptors.request.use(
//   async config => {
//     config.headers['Authorization'] = `Bearer ${await getToken()}`;
//     config.headers['Content-Type'] = 'application/json';
//     // 'grant_type': 'client_credentials', 
//     // 'scope': 'public', 
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   },
// );

// AxiosBase.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         Promise.reject(error)
//     }
// )

export default AxiosBase;

// export const handleError = (error) => {
//     alert('handle Error')
//     console.log('HandleError : ',JSON.stringify(error))
//     if(error.response.status === 404){
//         // showMessage(error.response.data.Message)
//     }
// }
