import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { BehaviorSubject, Observable } from 'rxjs';
declare class WOW {
  boxes: any;
  init(): void;
}

@Component({
  selector: 'wow',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  template: `
    <div class="d-flex">
      <cdk-virtual-scroll-viewport itemSize="50" style="height: 70vh; width: 50%;">

          <div *cdkVirtualFor="let ani of animate; index as i; trackBy: trackById" #list [className]="'wow item animate__animated animate__' + ani"></div>

      </cdk-virtual-scroll-viewport>

      <div style="height: 70vh; width: 50%; overflow: auto">
          <div *ngFor="let _ of li; index as i; trackBy: trackById" class="item animated slideInRight animate__animated animate__slideInLeft" data-wow-offset="10"></div>
        </div>

    </div>
  `,
  styles: [`
    .item {
      width: 420px;
      height: 50px;
      background: deeppink;
      margin: 20px;
    }

  `]
})
export class WowComponent implements OnInit {
  @ViewChildren('list') list!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild(CdkVirtualScrollViewport) cdkViewport!: CdkVirtualScrollViewport
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
  ];
  offset$ = new BehaviorSubject(null);
  infinite$!: Observable<any[]>;
  isEndOfList = false;
  constructor() {
    this.animate.forEach((e) => {
      this.li.push(e)
    })
    const wow = new WOW();
    wow.init();
  }

  nextBatch(e: any, offset: any) {
    if(this.isEndOfList) {
      return;
    }
    const end = this.cdkViewport.getRenderedRange().end;
    const total = this.cdkViewport.getDataLength();
    if(end === total) {
      this.offset$.next(offset);
    }
  }

  trackById(id: number) {
    return id;
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.list.forEach((el, i) => {
      el.nativeElement.classList.add(`animate__${this.animate[Math.floor(Math.random() * this.animate.length)]}`);
      // el.nativeElement.classList.add(`animate__delay-${(i+1) % 5}s`);
    })
  }

}
