
const initialState = {
  test: 'initial'
};

export default function(state = initialState, action) {
  return { ...state, ...{ lastAction: action.type } };
}
