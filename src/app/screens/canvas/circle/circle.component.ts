import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'circle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #circle></canvas>
  `,
  styles: [`
    canvas {
      border: 1px solid deepskyblue;
    }
  `]

})
export class CircleComponent implements OnInit {
  @ViewChild('circle', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  circle = 20;
  list: Circle[] = [];

  constructor(
    @Inject(DOCUMENT) document: Document
  ) {
  }

  renderRandomColor(min = 0, max = 16777215) {
    const x = Math.round(Math.random() * (max - min) + min);
    const y = x.toString(16);
    const z = `${y}fffffff`.slice(0, 6);
    const color = `#${z}`;
    return `#${z}`;
  }

  createX() {
    const x = Math.random() * this.canvas.nativeElement.width;
    return Math.floor(Math.random() * this.canvas.nativeElement.width);
  }

  createY() {
    return Math.floor(Math.random() * this.canvas.nativeElement.height);
  }

  setup() {
    this.ctx = this.canvas.nativeElement.getContext("2d")!;
    this.canvas.nativeElement.width = innerWidth;
    this.canvas.nativeElement.height = innerHeight;

    document.addEventListener("resize", (e) => {

      this.canvas.nativeElement.width = innerWidth;
      this.canvas.nativeElement.height = innerHeight;
    });
  }

  ngOnInit(): void {
    this.setup();
    this.init();
    let mouse = {
      x: null, y: null
    };
    this.animate();
  }

  init() {
    for (let i = 0; i < this.circle; i++) {
      this.list.push(new Circle({x: this.createX(), y: this.createY(), radius: 10, bgColor: this.renderRandomColor()}));
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.list.forEach(circle => {
      circle.update({canvas: this.canvas.nativeElement, context: this.ctx});
    });
  }
}

interface Velocity {
  x: number;
  y: number;
}

interface CircleInstance {
  x: number,
  y: number,
  radius: number,
  bgColor: string;
  speedX?: number;
  speedY?: number;
  velocity?: Velocity;
}

class Circle implements CircleInstance {
  x: number;
  y: number;
  radius: number;
  bgColor: string;
  speedX: number;
  speedY: number;
  velocity: Velocity;

  constructor(properties: CircleInstance) {
    console.log(properties);
    this.x = properties.x;
    this.y = properties.y;
    this.radius = properties.radius;
    this.bgColor = properties.bgColor;
    this.speedX = 5;
    this.speedY = 5;
    this.velocity = {
      x: 5,
      y: 5,
    };
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.bgColor;
    context.fill();
    context.closePath();
  }

  checkCollision(canvas: HTMLCanvasElement) {
    if (this.x >= canvas.width || this.x <= 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y >= canvas.height || this.y <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  update({canvas, context}: { canvas: HTMLCanvasElement, context: CanvasRenderingContext2D }) {
    this.x = this.velocity.x;
    this.y += this.velocity.y;
    this.checkCollision(canvas);
    this.draw(context);
  }

}
