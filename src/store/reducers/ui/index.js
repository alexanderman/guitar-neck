const initialState = {
  cell: undefined,
  scale: undefined
};

export default function(state = initialState, action) {
  switch(action.type) {

    case 'cell-over': 
      return { ...state, cell: action.payload };

    case 'cell-out': 
      return { ...state, cell: undefined };
      
    case 'major-scale': 
      return { ...state, scale: action.payload ? { type: 'major' } : undefined };
      
    case 'minor-scale': 
      return { ...state, scale: action.payload ? { type: 'minor' } : undefined };
      
    default: 
      return { ...state };
  }

}

