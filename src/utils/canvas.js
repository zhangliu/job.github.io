export const learnLine = (canvas, config = {}) => {
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();

  ctx.strokeStyle = config.strokeStyle || '#ff4d4f';
  const offsetLeft = rect.left;
  const offsetTop = rect.top;

  canvas.onmousedown = function(e) {
    ctx.beginPath();
    ctx.moveTo(e.pageX - offsetLeft, e.pageY - offsetTop);
  
    canvas.onmousemove = function(e){
      const targetX = e.pageX - offsetLeft;
      const targetY = e.pageY - offsetTop;

      ctx.lineWidth = 1.2;
      ctx.lineTo(targetX, targetY);
      ctx.stroke();
    };
  
    canvas.onmouseup = function(e) {
      canvas.onmousemove = null;
      canvas.onmouseup = null;
    };
  };
}