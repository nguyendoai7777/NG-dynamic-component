import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Circle } from './circle';
interface MouseCoordinates {
  x: number | undefined;
  y: number | undefined;
}
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
  circle = 500;
  list: Circle[] = [];
  mouse: MouseCoordinates = {
    x: undefined, y: undefined
  };

  constructor(
    @Inject(DOCUMENT) document: Document
  ) {
  }


  ngOnInit(): void {
    this.setup();
    this.init();
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
      circle.update({canvas: this.canvas.nativeElement, context: this.ctx, mouse: {x: this.mouse.x!, y: this.mouse.y!}});
    });
  }

  renderRandomColor(min = 0, max = 16777215) {
    const x = Math.round(Math.random() * (max - min) + min);
    const y = x.toString(16);
    const z = `${y}fffffff`.slice(0, 6);
    return `#${z}`;
  }

  createX() {
    return Math.floor(Math.random() * this.canvas.nativeElement.width);
  }

  createY() {
    return Math.floor(Math.random() * this.canvas.nativeElement.height);
  }

  setup() {
    this.ctx = this.canvas.nativeElement.getContext("2d")!;
    this.canvas.nativeElement.width = innerWidth - 19;
    this.canvas.nativeElement.height = innerHeight;
    window.addEventListener("resize", () => {
      this.canvas.nativeElement.width = innerWidth - 19;
      this.canvas.nativeElement.height = innerHeight;
    });
    window.addEventListener("mousemove", event => {
      if(!this.mouse.x) {
        this.mouse.x = 0
      }
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    });

    this.canvas.nativeElement.addEventListener("mouseleave", (event) => {
      if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        this.mouse =  {
          x: undefined,
          y: undefined
        }
      }
    });
  }

}
