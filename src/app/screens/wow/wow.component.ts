import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
declare class WOW {
  boxes: any;
  init(): void;
}

@Component({
  selector: 'wow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div  class="content-container" style="display: flex; flex-wrap: wrap;">
      <div *ngFor="let _ of li; index as i" #list class="item wow animate__animated" data-wow-offset="10"></div>
    </div>
  `,
  styles: [`
    .item {
      width: 420px;
      height: 420px;
      background: deeppink;
      margin: 20px;
    }

  `]
})
export class WowComponent implements OnInit {
  @ViewChildren('list') list!: QueryList<ElementRef<HTMLElement>>;
  li: any[] = [];
  animate = [
    'slideInLeft',
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
    'backInDown',
    'backInLeft',
    'backInRight',
    'backInUp',
    'backOutDown',
    'backOutLeft',
    'backOutRight',
    'backOutUp',
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutTopLeft',
    'fadeOutTopRight',
    'fadeOutBottomRight',
    'fadeOutBottomLeft',
    'flip',
    'flipInX',
    'flipInY',
    'flipOutX',
    'flipOutY',
    'lightSpeedInRight',
    'lightSpeedInLeft',
    'lightSpeedOutRight',
    'lightSpeedOutLeft',
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
    'hinge',
    'jackInTheBox',
    'rollIn',
    'rollOut',
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',
  ]
  constructor() {
    this.animate.forEach((e) => {
      this.li.push(e)
    })
    const wow = new WOW();
    wow.init();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.list.forEach((el, i) => {
      el.nativeElement.classList.add(`animate__${this.animate[Math.floor(Math.random() * this.animate.length)]}`);
      // el.nativeElement.classList.add(`animate__delay-${(i+1) % 5}s`);
    })
  }

}
