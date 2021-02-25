export const state = () => ({
  currentView: 'CAPTURA DE DATOS',
  activeMenu: false,
})

export const mutations = {
  changeView(state, view) {
    state.currentView = view
  },
  changeMenuState(state, activeMenu) {
    state.activeMenu = !state.activeMenu
  },
}
