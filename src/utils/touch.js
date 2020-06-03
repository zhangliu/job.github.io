export const initDblTap = (node, callback) => {
  node.$tapCount = 0;
  node.$timer = null;

  node.addEventListener('touchstart', function(event) {
    if (node.$tapCount < 1) {
      node.$tapCount++;
      if (!node.$timer) node.$timer = setTimeout(() => { node.$tapCount = 0; node.$timer = null; }, 200);
      return;
    }
    if (callback) callback(event);
  });
}