function applyHoverEffect(stringList=[], cell, isApply=true) {
  const { fretIdx } = cell;
  return stringList.map(s => {
    let string = [...s];
    if (string[fretIdx]) {
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