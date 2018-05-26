import Vuex from 'vuex'
import axios from '~/plugins/axios.js'

const store = () => new Vuex.Store({
  state: {
    todoItems: [],
    progressItems: [],
    doneItems: []
  },
  mutations: {
    setTodoItems: (state, items) => {
      state.todoItems = items
    },
    setProgressItems: (state, items) => {
      state.progressItems = items
    },
    setDoneItems: (state, items) => {
      state.doneItems = items
    }
  },
  actions: {
    async getTodoItems ({ commit, dispatch }) {
      let { data } = await axios.get('/api/todo?status=TODO')
      commit('setTodoItems', data)
    },
    async getProgressItems ({ commit, dispatch }) {
      let { data } = await axios.get('/api/todo?status=PROGRESS')
      commit('setProgressItems', data)
    },
    async getDoneItems ({ commit, dispatch }) {
      let { data } = await axios.get('/api/todo?status=DONE')
      commit('setDoneItems', data)
    }
  }
})

export default store
