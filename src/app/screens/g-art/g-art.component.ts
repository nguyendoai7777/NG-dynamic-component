import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasConnectorService } from '../../services/canvas-connector.service';
import { Root } from './Root';

@Component({
  selector: 'g-art',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #gart></canvas>
    <div class="clear btn btn-danger" (click)="reset()">Clear</div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      .clear {
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  `],
  providers: [
    CanvasConnectorService
  ]
})
export class GArtComponent implements OnInit {
  @ViewChild('gart', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  isDrawing = false;

  constructor(private _canvasService: CanvasConnectorService) {
  }

  setup() {
    this.ctx = this._canvasService.connect(this.canvas);
    this._canvasService.setSize(this.canvas);

  }

  ngOnInit(): void {
    this.setup();
    this.canvas.nativeElement.addEventListener("mousedown", () => {
      this.isDrawing = true;
    });
    this.canvas.nativeElement.addEventListener("mouseup", () => {
      this.isDrawing = false;
    });

    this.canvas.nativeElement.addEventListener("mousemove", (e) => {
      // this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      if (this.isDrawing) {

        const r = new Root({x: e.x - 5, y: e.y - 40});
        r.update(this.ctx);
      }
    });
  }

  reset() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }
}
