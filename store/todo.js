export const state = () => ({
  items: []
})

export const mutation = {
  SET_ITEMS: (state, data) => {
    state.items = data
  }
}

export const actions = {
  fetch( { commit }, {hoge}) {
    commit('SET_ITEMS', [
      {
        id: 100
      }
    ])
  }
}
