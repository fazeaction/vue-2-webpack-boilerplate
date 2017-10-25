import * as types from '../mutation-types'
import api from './../../api/index'

const state = {
  count: 0
}

const getters = {
  pagesVisited: () => state.count,
}

const actions = {
  getData({ commit }) {
    return api.getData().then((data) => {
      console.log(data);
      commit(types.RECEIVE_DATA)
    })
  },
  increment: () => { state.count++ },
  reset: () => { state.count = 1 }
}

const mutations = {
  [types.RECEIVE_DATA]() {
    console.log(state)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
