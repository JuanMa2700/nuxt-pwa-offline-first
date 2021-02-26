export const state = () => ({
  currentView: 'CAPTURA DE DATOS',
  activeMenu: false,
  loading: true,
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
}
