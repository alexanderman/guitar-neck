import { STRINGS_SETUP, getNoteIndex, getNote } from './strings';
import { createMarkup } from './utils';

/** minor scale interavls */
const SCALE_INTERVALS = [2, 1, 2, 2, 1, 2, 2];

function createMinorScaleNotes(startNoteIdx) {
  let currNoteIdx = startNoteIdx;
  return SCALE_INTERVALS.reduce((res, step, idx) => {
    res[currNoteIdx] = {
      style: {
        opacity: 0.9 - (idx / 10) /** make it a function of index */
      },
      note: getNote(currNoteIdx)
      /* additional markup here */
    };
    currNoteIdx = getNoteIndex(currNoteIdx, step);
    return res;
  }, {});
}

function createMinorScale(strings = [], scale = { noteIdx: 0 }, stringsSetup = STRINGS_SETUP) {
  const scaleNotes = createMinorScaleNotes(scale.noteIdx);
  const markup = createMarkup(strings, scaleNotes, stringsSetup);
  return markup;
}


export {
  createMinorScale,
  createMinorScaleNotes
};