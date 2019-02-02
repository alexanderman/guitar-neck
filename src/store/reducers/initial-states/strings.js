/**
 * holds all default presets 
 * and helper methods on strings data structure
 */

const NOTES = [
  { idx: 0, doremi: 'La',   abc: 'A'  }, /** 0 */
  { idx: 1, doremi: 'La#',  abc: 'A#' }, /** 1 */
  { idx: 2, doremi: 'Ci',   abc: 'B'  }, /** 2 */
  { idx: 3, doremi: 'Do',   abc: 'C'  }, /** 3 */
  { idx: 4, doremi: 'Do#',  abc: 'C#' }, /** 4 */
  { idx: 5, doremi: 'Re',   abc: 'D'  }, /** 5 */
  { idx: 6, doremi: 'Re#',  abc: 'D#' }, /** 6 */
  { idx: 7, doremi: 'Mi',   abc: 'E'  }, /** 7 */
  { idx: 8, doremi: 'Fa',   abc: 'F'  }, /** 8 */
  { idx: 9, doremi: 'Fa#',  abc: 'F#' }, /** 9 */
  { idx: 10, doremi: 'Sol',  abc: 'G'  }, /** 10 */
  { idx: 11, doremi: 'Sol#', abc: 'G#' }, /** 11 */
]

const NUMBER_OF_FRETS = 13;

const STRINGS_SETUP = [
  7,
  2,
  10,
  5,
  0,
  7
];


/** @returns {string[STRINGS_SETUP.length, NUMBER_OF_FRETS]} the whole neck populated by indexes of NOTES */
function createStrings(stringsSetup = STRINGS_SETUP, numOfFrets = NUMBER_OF_FRETS) {
  let strings = [];
  
  for (let stringIdx = 0; stringIdx < stringsSetup.length; stringIdx++) {
    let stringNotes = [];
    
    for (let stringNoteIdx = 0; stringNoteIdx < numOfFrets; stringNoteIdx++) {
      const note = getNoteIndex(stringsSetup[stringIdx], stringNoteIdx);
      stringNotes.push(note);
    }
    
    strings.push(stringNotes);
  }
  return strings;
}

/** iterates over all strings all frets */
function forEachGuitarNote(strings = [], callback = (stringIdx, fretIdx, noteIdx, note) => {}, notes = NOTES) {
  strings.forEach((string = [], stringIdx) => {
    string.forEach((noteIdx, fretIdx) => {
      callback(stringIdx, fretIdx, noteIdx, notes[noteIdx]);
    });
  });
}


/** @returns {note object} from notes  */
function getNote(fromIdx = 0, fretDistance = 0, notes = NOTES) {
  return notes[(fromIdx + fretDistance) % notes.length];
}

function getNoteIndex(fromIdx = 0, fretDistance = 0, notes = NOTES) {
  return (fromIdx + fretDistance) % notes.length;
}

export {
  NOTES,
  STRINGS_SETUP,
  NUMBER_OF_FRETS,
  createStrings,
  forEachGuitarNote,
  getNote,
  getNoteIndex
}


