import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,
    role: null
  },
  mutations: {
    setUsuario(state, usuario){
      state.usuario = usuario;
    },
    setToken(state, token){
      state.token = token;
    },
    setRole(state, role){
      state.role = role;
    },
    logout(state){
      state.token = null;
      state.usuario = null;
    }
  },
  actions: {
    login(context, { usuario, senha }){
      axios
      .post("login", {
        nome: usuario, 
        senha: senha
      })
      .then(res => {
        console.log(res);
        context.commit('setUsuario', usuario);
        context.commit('setToken', res.data.token);
        context.commit('setRole', res.data.autorizacao);
        router.push('/');
      })
    }
  },
  modules: {
  }
})
