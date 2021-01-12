import Vue from 'vue'

const mutations = {
  push (state, articles) {
    articles = articles.reduce((obj, item) => {
      obj[item.id] = item
      return obj
    }, {})

    state.list = { ...state.list, ...articles }
  },

  insert (state, payload) {
    Vue.set(state.list, payload.id, payload)
    state.currentId = payload.id
  },

  update (state, payload) {
    Vue.set(state.list, payload.id, payload)
  },

  delete (state, id) {
    Vue.delete(state.list, id)
    state.currentId = null
  }
}

export default mutations
