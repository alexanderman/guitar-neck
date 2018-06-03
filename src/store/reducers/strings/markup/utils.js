import { forEachGuitarNote, STRINGS_SETUP } from '../strings';

function createMarkup(strings = [], markupNotes = {}, stringsSetup = STRINGS_SETUP) {
  const markup = [];
  forEachGuitarNote(strings, (stringIdx, fretIdx, noteIdx, note) => {
    const string = markup[stringIdx] = markup[stringIdx] || [];
    string[fretIdx] = markupNotes[noteIdx] || undefined;
  });
  return markup;
}


export {
  createMarkup
};