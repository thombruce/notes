import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  list: {}
})

const articles = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default articles
