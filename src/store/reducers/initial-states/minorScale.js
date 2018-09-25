import { STRINGS_SETUP, getNoteIndex, getNote } from './strings';
import { createMarkup } from './utils';

/** minor scale interavls */
const SCALE_INTERVALS = [2, 1, 2, 2, 1, 2, 2];

function createMinorScaleNotes(startNoteIdx) {
  let currNoteIdx = startNoteIdx;
  return SCALE_INTERVALS.reduce((res, step) => {
    currNoteIdx = getNoteIndex(currNoteIdx, step);
    res[currNoteIdx] = {
      style: {
        opacity: 0.4
      },
      note: getNote(currNoteIdx)
      /* additional markup here */
    };
    return res;
  }, {});
}

function createMinorScale(strings = [], scale = { noteIdx: 0 }, stringsSetup = STRINGS_SETUP) {
  const scaleNotes = createMinorScaleNotes(scale.noteIdx);
  const markup = createMarkup(strings, scaleNotes, stringsSetup);

  // console.log('minor scale', markup);
  return markup;
}


export {
  createMinorScale,
  createMinorScaleNotes
};