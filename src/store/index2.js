import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      initialTip: "",
      score: 0,
      initialGreeting: "",
      todayActivities: [],
      goals: [],
      activeChallenges: []
    }
  },
  mutations: {

  UPDATE_USER(state, userStatus){
  state.user = userStatus;
  },

  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    userInfo: state => {
      return state.user;
    }
  },  
  actions: {},
  modules: {}
});
