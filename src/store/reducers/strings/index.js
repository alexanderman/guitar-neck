import { createStrings, NUMBER_OF_FRETS, STRINGS_SETUP, NOTES } from '../initial-states/strings';
import { createMajorScale } from '../initial-states/majorScale';
import { createMinorScale } from '../initial-states/minorScale';
import { applyHoverEffect } from '../../../services/cellFunctions';

const PRESETS = {
  STRINGS: createStrings(STRINGS_SETUP, NUMBER_OF_FRETS),
  STRINGS_SETUP,
  NUMBER_OF_FRETS,
  NOTES
};

const initialState = {
  PRESETS,
  markup: {
    strings: [] /* list[6][12] of actual markup */
  }
}


export default function (state = initialState, action) {

  switch (action.type) {

    case 'major-scale': return { 
      ...state,
      markup: {
        strings: createMajorScale(state.PRESETS.STRINGS, undefined, state.PRESETS.stringsSetup)
      }
    }

    case 'minor-scale': return { 
      ...state,
      markup: {
        strings: createMinorScale(state.PRESETS.STRINGS, undefined, state.PRESETS.stringsSetup)
      }
    }

    case 'cell-over': return {
      ...state,
      markup: { 
        ...state.markup.string,
        strings: [...applyHoverEffect(state.markup.strings, action.payload, true)]
      }
    }

    case 'cell-out': return {
      ...state, 
      markup: { 
        ...state.markup, 
        strings:[...applyHoverEffect(state.markup.strings, action.payload, false)] }
    }


    default: return { 
      ...state,
      markup: {
        strings: createMinorScale(state.PRESETS.STRINGS, undefined, state.PRESETS.stringsSetup)
      }
    }
  

  }
  
}

