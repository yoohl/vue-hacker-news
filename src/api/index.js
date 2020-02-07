import axios from 'axios';

// 1. http req, res 관련 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. api 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`); // return new Promise
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid) {
  return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
};
