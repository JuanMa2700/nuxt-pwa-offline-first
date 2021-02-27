// We import our custom class to interact with indexed db
import reqDb from '../assets/reqDb.js'

// State initial values
export const state = () => ({
  currentView: 'CAPTURA DE DATOS',
  activeMenu: false,
  loading: true,
  pending: 0,
})

// Defining methods to update our store
export const mutations = {
  changeView(state, view) {
    state.currentView = view
  },
  changeMenuState(state) {
    state.activeMenu = !state.activeMenu
  },
  changeLoading(state, value) {
    state.loading = value
  },
  changePending(state, value) {
    state.pending = value
  },
}

// Actions to apply middleware logic before
// updating our store data
export const actions = {
  async fetchRequestsLength({ commit }) {
    const db = await reqDb.connect()
    const data = await db.getAll()
    commit('changePending', data.length)
  },
}
