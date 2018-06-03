const MainDispatcher = dispatch => ({
  setLastAction: () => dispatch({ type: `test-type-${Math.random()}`, payload: {} })
});

export default MainDispatcher;