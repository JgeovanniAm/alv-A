class MyDraw {
  constructor(x, y, w, h, ctx, leftDraw, rightDraw) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.left = leftDraw;
    this.right = rightDraw;
  }

  drawCtx() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  animation() {
    this.w -= this.left;
    this.w += this.right;
    this.drawCtx();
  }
}

export default MyDraw