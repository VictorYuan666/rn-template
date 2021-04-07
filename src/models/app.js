const app = {
  state: {
    showSplash: true,
    token: null,
    dark: false,
  },
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    changeTheme(payload, rootState) {
      this.update({dark: !rootState.app.dark});
    },
  },
};

export default app;
