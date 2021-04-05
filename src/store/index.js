import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    pathName: "",
    currDbSource: {},
    user: {},
    Token:"",
  },
  getters:{
    getToken(state){
      return state.Token
    },
    getuser(state){
      return state.user
    }
  },
  mutations:{
    // 保存当前菜单栏的路径
    savePath(state,pathName){
      state.pathName = pathName;
    },
    // 保存当前点击的数据源
    saveCurrDbSource(state,currDbSource){
      state.currDbSource = currDbSource;
    },
    // 保存当前点击的元数据
    saveUser(state,user){
      state.user = user;
    },
    // 保存所有数据源
    saveToken(state,Token){
      state.Token = Token;
    }
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
