const axios = require('axios')
let baseURL = 'http://news-at.zhihu.com/api';

const request = axios.create({
  baseURL: baseURL,
  timeout: 8000
})

request.interceptors.request.use(
  config => {
    config.headers.tokenId = '435065970'
    config.headers.sign = new Date().getTime()
    return config
  },
  error => {
    return Promise.error(error);
  }
)

request.interceptors.response.use(
  response => {
    if (response) {
      return response.data;
    } else {
      Promise.reject(new Error('error'))
    }
  },

  error => {
    return Promise.reject(error)
  }
)

module.exports = request;