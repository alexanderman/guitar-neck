import { STRINGS_SETUP, getNoteIndex } from '../strings';
import { createMarkup } from './utils';

/** major scale interavls */
const SCALE_INTERVALS = [2, 2, 1, 2, 2, 2, 1];

function createMajorScaleNotes(startNoteIdx) {
  let currNoteIdx = startNoteIdx;
  return SCALE_INTERVALS.reduce((res, step) => {
    currNoteIdx = getNoteIndex(currNoteIdx, step);
    res[currNoteIdx] = {/* additional markup here */};
    return res;
  }, {});
}

function createMajorScale(strings = [], scale = { noteIdx: 0 }, stringsSetup = STRINGS_SETUP) {
  const scaleNotes = createMajorScaleNotes(scale.noteIdx);
  const markup = createMarkup(strings, scaleNotes, stringsSetup);

  console.log('major scale', markup);
  return markup;
}


export {
  createMajorScale,
  createMajorScaleNotes
};