import axios from 'axios';
import { API_DEFAULT_CONFIG } from '../config';

export default {
    get: (url, options = {}) => {
      return axios(url, options).then(function(response) {
        return response;
      });
    },
    post: function(url, data, options = {}) {
      return axios
        .post(url, data, { ...API_DEFAULT_CONFIG, ...options })
        .then(function(response) {
          // if (!response.ok) {
          //   throw Error(response.statusText);
          // }
          return response;
        });
    },
    put: function(url, data, options = {}) {
      return axios
        .put(url, data, { ...API_DEFAULT_CONFIG, ...options })
        .then(function(response) {
          // if (!response.ok) {
          //   throw Error(response.statusText);
          // }
          return response;
        });
    },
    delete: function(url, options = {}) {
      return axios(url, { ...options, ...{ method: 'DELETE' } }).then(function(
        response
      ) {
        // if (!response.ok) {
        //   throw Error(response.statusText);
        // }
        return response;
      });
    }
};