import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user: {},
    Token:"",
    is_login:false,
    sessionId:""
  },
  getters:{
    getToken(state){
      return state.Token
    },
    getUser(state){
      return state.user
    },
    getLogin(state){
      return state.is_login
    }
  },
  mutations:{
    // 保存当前菜单栏的路径
    savePath(state,pathName){
      state.pathName = pathName;
    },
    // 保存当前点击的元数据
    saveUser(state,user){
      state.user = user;
    },
    // 保存所有数据源
    saveToken(state,Token){
      state.Token = Token;
    },
    saveSessionId(state,sessionId){
      state.sessionId = sessionId;
    },
    saveLogin(state,is_login){
      state.is_login = is_login;
    }
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
