import * as types from '../mutation-types'

const state = {
  count: 0
}

const getters = {
  pagesVisited: () => state.count
}

const actions = {
  increment: ({ commit }) => commit(types.INCREMENT),
  reset: ({ commit }) => commit(types.RESET),
}

const mutations = {
  [types.INCREMENT]() {
    state.count++;
  },

  [types.RESET]() {
    state.count = 1
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
