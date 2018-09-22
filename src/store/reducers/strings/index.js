import { createStrings, NUMBER_OF_FRETS, STRINGS_SETUP, NOTES } from './strings';
import { createMajorScale } from './markup/majorScale';
import { createMinorScale } from './markup/minorScale';

const initialState = {
  strings: createStrings(STRINGS_SETUP, NUMBER_OF_FRETS),
  stringsSetup: STRINGS_SETUP,
  numberOfFrets: NUMBER_OF_FRETS,
  NOTES,
  markup: [],
  chord: {

  },
  scale: {
    noteIdx: 0,
  }
};

// debug code
createMajorScale(initialState.strings, { noteIdx: 0 }, STRINGS_SETUP);
createMinorScale(initialState.strings, { noteIdx: 0 }, STRINGS_SETUP);

export default function stringsReducer(state = initialState, action) {

  switch (action.type) {
    case 'major-scale': {
      return { 
        ...state,
        markup: createMajorScale(state.strings, action.scale, state.stringsSetup),
        scale: action.type /* unused */
      };
    }

    case 'minor-scale': {
      return { 
        ...state,
        markup: createMinorScale(state.strings, action.scale, state.stringsSetup),
        scale: action.type
      };
    }

    default: {
      return { 
        ...state,
        markup: createMajorScale(state.strings, action.scale, state.stringsSetup)
      };
    }
  }

}

