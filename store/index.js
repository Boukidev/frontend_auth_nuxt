export const getters = {
  isAuth(state) {
    // auth object as default will be added in vuex state, when you initialize nuxt auth
    return state.auth.loggedIn;
  },

  getUserInfo(state) {
    return state.auth.user;
  },
};
