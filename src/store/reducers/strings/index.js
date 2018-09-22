import { createStrings, NUMBER_OF_FRETS, STRINGS_SETUP, NOTES } from './strings';
import { createMajorScale } from './markup/majorScale';
import { createMinorScale } from './markup/minorScale';

const initialState = {
  PRESETS: {
    STRINGS: createStrings(STRINGS_SETUP, NUMBER_OF_FRETS),
    STRINGS_SETUP,
    NUMBER_OF_FRETS,
    NOTES
  },
  markup: [],
  chord: {}
};

// debug code
createMajorScale(initialState.strings, { noteIdx: 0 }, STRINGS_SETUP);
createMinorScale(initialState.strings, { noteIdx: 0 }, STRINGS_SETUP);

export default function stringsReducer(state = initialState, action) {

  switch (action.type) {
    case 'major-scale': {
      return { 
        ...state,
        markup: createMajorScale(state.PRESETS.STRINGS, action.scale, state.PRESETS.stringsSetup)
      };
    }

    case 'minor-scale': {
      return { 
        ...state,
        markup: createMinorScale(state.PRESETS.STRINGS, action.scale, state.PRESETS.stringsSetup)
      };
    }

    default: {
      return { 
        ...state,
        markup: createMajorScale(state.PRESETS.STRINGS, action.scale, state.PRESETS.stringsSetup)
      };
    }
  }

}

