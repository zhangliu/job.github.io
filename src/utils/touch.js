export const initDblTap = (node, callback) => {
  node.$tapCount = 0;
  node.$timer = null;
  window.$(node).on('tap', () => {
    if (node.$tapCount < 1) {
      node.$tapCount++;
      if (!node.$timer) node.$timer = setTimeout(() => { node.$tapCount = 0; node.$timer = null; }, 200);
      return;
    }
    if (callback) callback();
  })
}

export const initTurnRight = (node, callback) => {
  const onSwipeleft = (e) => {
    const start = e.swipestart.coords[0];
    const right = document.documentElement.clientWidth;
    if ((right - start) > 10) return;

    if (callback) callback();
    // window.$(node).off('swipeleft', onSwipeleft);
  }

  window.$(node).on('swipeleft', onSwipeleft);
}

export const initTurnLeft = (node, callback) => {
  const onSwiperight = (e) => {
    const start = e.swipestart.coords[0];
    if (start > 10) return;

    if (callback) callback();
    // window.$(node).off('swiperight', onSwiperight);
  }

  window.$(node).on('swiperight', onSwiperight);
}