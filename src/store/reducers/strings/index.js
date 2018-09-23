import { createStrings, NUMBER_OF_FRETS, STRINGS_SETUP, NOTES } from '../initial-states/strings';
import { createMajorScale } from '../initial-states/majorScale';
import { createMinorScale } from '../initial-states/minorScale';

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

