

function uplightFretMarkup(stringList=[], cell) {
  const { fretIdx } = cell;

  let res = stringList.map(s => {
    let string = [...s];
    if (string[fretIdx]) {
      let __cell = string[fretIdx];
      string[fretIdx] = { 
        ...string[fretIdx], 
        style: { opacity: 1 }
      }
    }
    return [...string];
  });

  return res;
}


function downlightFretMarkup(strings=[], cell) {
  const { fretIdx } = cell;
  strings.forEach(s => {
    if (s[fretIdx]) 
      s[fretIdx] = { 
        ...s[fretIdx], 
        style: { opacity: 0.4 }
      }
  });
  return strings;
}


export {
  uplightFretMarkup,
  downlightFretMarkup
}