import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[transform]'
})
export class TransformDirective implements OnChanges {
  @Input('transform') transform: 'uppercase' | 'lowercase' = 'lowercase';
  constructor(private readonly elr: ElementRef<HTMLElement>) {}

  ngOnChanges() {
    if(this.transform === 'uppercase') {
      this.elr.nativeElement.textContent = this.elr.nativeElement.textContent?.toUpperCase() || '';
    } else {
      this.elr.nativeElement.textContent = this.elr.nativeElement.textContent?.toLowerCase() || '';
    }
  }

}
