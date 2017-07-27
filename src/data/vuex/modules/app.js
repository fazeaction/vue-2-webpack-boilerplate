import Vue from 'vue'
import * as types from '../mutation-types'
import api from './../../api/index'

const state = {
  // example: false,
}

const getters = {
  // example: () => state.example,
}

const actions = {
  getData({ commit }) {
    return api.getData().then((data) => {
      console.log(data);
      commit(types.RECEIVE_DATA)
    })
  },
}

const mutations = {
  [types.RECEIVE_DATA](state) {
    console.log(state)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
