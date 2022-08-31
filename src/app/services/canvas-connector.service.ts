import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class CanvasConnectorService {

  constructor() { }

  connect(canvasElementRef: ElementRef<HTMLCanvasElement>): CanvasRenderingContext2D {
    return canvasElementRef.nativeElement.getContext("2d")!;
  }

  setSize(canvasElementRef: ElementRef<HTMLCanvasElement>) {
    /** @type {HTMLCanvasElement} */
    canvasElementRef.nativeElement.width = innerWidth - 19;
    canvasElementRef.nativeElement.height = innerHeight - 50;
    window.addEventListener("resize", () => {
     canvasElementRef.nativeElement.width = innerWidth - 19;
     canvasElementRef.nativeElement.height = innerHeight - 50;
    });
  }

}
