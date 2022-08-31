export interface RootProps {
  x: number;
  y: number;
  speedX?: number;
  speedY?: number;
  maxSize?: number;
  size?: number;
  angle?: number;
  vs?: number;
  va?: number;
}

export class Root implements RootProps {
  maxSize: number;
  size: number;
  speedX: number;
  speedY: number;
  x: number;
  y: number;
  angle: number;
  vs: number;
  va: number;
  constructor(props: RootProps) {
    this.x = props.x;
    this.y = props.y;
    this.speedX = props.speedX || Math.random() * 4 - 2;
    this.speedY = props.speedY || Math.random() * 4 - 2;
    this.maxSize = props.maxSize || Math.random() * 7 + 5;
    this.size = props.size || Math.random() + 2;
    this.angle = Math.random() * 4.2;
    this.vs = Math.random() * .3 + .05;
    this.va = Math.random() * .6 - .3;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.speedX + Math.sin(this.angle);
    this.y += this.speedY + Math.sin(this.angle);
    this.size += this.vs;
    this.angle += this.va;
    if(this.size < this.maxSize) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'hsl(140, 100%, 50%)';
      ctx.fill();
      requestAnimationFrame(this.update.bind(this, ctx));
      //ctx.closePath();
      ctx.stroke();
    }
  }

}
