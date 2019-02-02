function applyHoverEffect(stringList=[], cell, isApply=true) {
  const { fretIdx, stringIdx } = cell;
  return stringList.map((s, idx) => {
    let string = [...s];
    
    /** hiligh string */
    if (stringIdx === idx) {
      string = string.map(sCell => {
        return !sCell ? undefined
          : { ...sCell, style_hover: isApply ? { opacity: 1 } : undefined }
      })
    }
    
    /** hiligh fret */
    else if (string[fretIdx]) {
      string[fretIdx] = { 
        ...string[fretIdx],
        style_hover: isApply ? { opacity: 1 } : undefined
      };
    }
    return string;
  });
}


export {
  applyHoverEffect
}