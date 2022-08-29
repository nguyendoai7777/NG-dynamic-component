import { Component, ComponentFactory, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCpnDirective } from './dynamic-cpn.directive';
import { concatMap, delay, exhaustMap, filter, from, fromEvent, interval, map, mergeMap, Observable, of, Subscription, take, tap, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'dynamic-cpn',
  templateUrl: './dynamic-cpn.component.html',
  styleUrls: ['./dynamic-cpn.component.scss']
})
export class DynamicCpnComponent implements OnInit {
  @ViewChild('submit', {static: true}) submitBtn!: ElementRef<HTMLElement>;
  @ViewChild(DynamicCpnDirective, {static: true, read: ViewContainerRef}) vcRef!: ViewContainerRef;
  x = -1;
  subscriber = {
    next: (v: any) => {
      console.log(v);
    },
    error: (error: any) => {
      console.log(error);
    },
    complete: () => {
      console.log('completed');}
  };

  constructor() {
  }

  ngOnInit(): void {
    void this.showCpnOne();
    // this.exhaustedMapEx();
    //this.submitWithExhaustedMap();
    from([1, 2, 3, 4, 5, 6]).pipe(
      concatMap(e => of(e).pipe(delay(1000))),
      exhaustMap(e => of(e).pipe(filter(e => e < 4 )))
    ).subscribe(this.subscriber);
  }

  getData(param: any): Observable<any> {
    if (param == 'a') {
      return interval(1000).pipe(
        map(val => param + '-' + val.toString()),
        take(4),
        delay(1000),
      );
    } else if (param == 'b') {
      return interval(1000).pipe(
        map(val => param + '-' + val.toString()),
        take(4),
        delay(7000)
      );
    }
    return of(null);
  }

// using e
  submitWithExhaustedMap(): void {
    from(['a', 'b']).pipe(
      exhaustMap(param => this.getData(param)),
    ).subscribe(val => console.log(val));
    /*console.log(this.submitBtn);
    fromEvent(this.submitBtn.nativeElement, "click").pipe(
      exhaustMap((e) => {
        return of(e);
      })
    ).subscribe(x => console.log(x));*/
  }

  exhaustedMapEx() {
    of(1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).pipe(
      exhaustMap((v) => of(v * 2)),
    ).subscribe(x => {
      console.log(x);
    });
  }

  clear() {
    this.vcRef.clear();
  }

  async showCpnOne() {
    if (this.x !== 1) {
      this.clear();
      const {ComponentOneComponent} = await import('./component-one/component-one.component');
      const createInstance = this.vcRef.createComponent(ComponentOneComponent);
      createInstance.instance.x = Math.random();
    }
    this.x = 1;
  }

  async showCpnTwo() {
    if (this.x !== 2) {
      this.clear();
      const {ComponentTwoComponent} = await import('./component-two/component-two.component');
      this.vcRef.createComponent(ComponentTwoComponent);
    }
    this.x = 2;
  }

}
