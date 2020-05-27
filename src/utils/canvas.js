export const learnLine = (canvas, config = {}) => {
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = config.strokeStyle || '#ff4d4f';

  canvas.ontouchstart = function(e) {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    ctx.beginPath();
    ctx.moveTo(x,y);
  
    canvas.ontouchmove = function(e){
      const targetX = e.touches[0].clientX - this.offsetLeft;
      const targetY = e.touches[0].clientY - this.offsetTop;
  
      ctx.lineWidth = 1;
      ctx.lineTo(targetX,targetY);
      ctx.stroke();
    };
  
    canvas.ontouchend = function(e) {
      canvas.ontouchmove = null;
      canvas.ontouchend = null;
    };
  };
}