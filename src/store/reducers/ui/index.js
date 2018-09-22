const initialState = {
  cell: undefined
};

export default function(state = initialState, action) {

  switch(action.type) {
    case 'cell-over': 
      return { ...state, cell: action.payload };
    case 'cell-out': 
    default: 
      return { ...state };
  }

}

