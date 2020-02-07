import Vue from 'vue';
import Vuex from 'vuex';
import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchUserInfo, 
  fetchItemInfo,
} from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  getters: {

    fetchedAsk(state) {
      return state.ask;
    },
    fetchedUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ITEM(state, item) {
      state.item = item;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          // SET NEW로 제어권을 넘김, 액션에서 커밋을 해서 뮤테이션에 값을 넘기고 있음
          context.commit('SET_NEWS', response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((response) => {
          context.commit('SET_ASK', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          context.commit('SET_JOBS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_USER({ commit }, userName) {
      fetchUserInfo(userName)
        .then((response) => {
          commit('SET_USER', response.data);
        })
        .catch();
    },
    FETCH_ITEM({ commit }, itemId) {
      fetchItemInfo(itemId)
        .then((response) => {
          commit('SET_ITEM', response.data);
        })
        .catch();
    },
  },
});
