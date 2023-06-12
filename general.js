function predictDesignChange(classObj) {
  let designChange = '';
  
  if (classObj.temperature === 'hot') {
    if (classObj.mood === 'happy') {
      designChange = 'bright colors and bold patterns';
    } else if (classObj.mood === 'sad') {
      designChange = 'cool colors and calming patterns';
    } else {
      designChange = 'neutral colors and simple patterns';
    }
  } else if (classObj.temperature === 'cold') {
    if (classObj.mood === 'happy') {
      designChange = 'warm colors and cozy patterns';
    } else if (classObj.mood === 'sad') {
      designChange = 'dark colors and moody patterns';
    } else {
      designChange = 'earthy colors and natural patterns';
    }
  } else {
    designChange = 'no change in design';
  }
  
  return designChange;
}
predictDesignChange("hot")
