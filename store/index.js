import reqDb from '../assets/reqDb.js'

export const state = () => ({
  currentView: 'CAPTURA DE DATOS',
  activeMenu: false,
  loading: true,
  pending: 0,
})

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

export const actions = {
  async fetchRequestsLength({ commit }) {
    const db = await reqDb.connect()
    const data = await db.getAll()
    commit('changePending', data.length)
  },
}
