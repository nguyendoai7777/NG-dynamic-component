
export interface Coordinates {
  x: number;
  y: number;
}

export interface Velocity extends Coordinates {}

export interface CircleInstance extends Coordinates {
  radius: number,
  bgColor: string;
  speedX?: number;
  speedY?: number;
  velocity?: Velocity;
}

export interface UpdateProps {
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  mouse: Coordinates
}

export class Circle implements CircleInstance {
  x: number;
  y: number;
  radius: number;
  bgColor: string;
  speedX: number;
  speedY: number;
  velocity: Velocity;

  constructor(properties: CircleInstance) {
    this.x = properties.x;
    this.y = properties.y;
    this.radius = properties.radius;
    this.bgColor = properties.bgColor;
    this.speedX = 5;
    this.speedY = 5;
    this.velocity = {
      x: Math.random() * 4 - 2,
      y: Math.random() * 4 - 2,
    };
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.bgColor;
    context.shadowColor = this.bgColor;
    context.shadowBlur = 5;
    context.fill();
    context.closePath();
    context.restore();
  }

  checkCollision(canvas: HTMLCanvasElement) {
    if (this.x >= canvas.width || this.x <= 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y >= canvas.height || this.y <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  update(updateProps: UpdateProps) {
    const maxRadius = 50;
    const minRadius = 5;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (updateProps.mouse.x - this.x < 75 && updateProps.mouse.x - this.x > -75 && updateProps.mouse.y - this.y < 75 && updateProps.mouse.y - this.y > -75) {
      if (this.radius < maxRadius) this.radius += 5;
    } else {
      if (this.radius > minRadius) {
        this.radius -= 2;
        this.x += this.velocity.x * 4;
        this.y += this.velocity.y * 4;
      }
    }
    this.checkCollision(updateProps.canvas);
    this.draw(updateProps.context);
  }

}
