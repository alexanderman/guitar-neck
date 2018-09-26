import { STRINGS_SETUP, getNoteIndex, getNote } from './strings';
import { createMarkup } from './utils';

/** major scale interavls */
const SCALE_INTERVALS = [2, 2, 1, 2, 2, 2, 1];

function createMajorScaleNotes(startNoteIdx) {
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

/** scale = { noteIdx: 0 }, the index of note from NOTES to start the scale from */
function createMajorScale(strings = [], scale = { noteIdx: 0 }, stringsSetup = STRINGS_SETUP) {
  const scaleNotes = createMajorScaleNotes(scale.noteIdx);
  const markup = createMarkup(strings, scaleNotes, stringsSetup);
  return markup;
}


export {
  createMajorScale,
  createMajorScaleNotes
};