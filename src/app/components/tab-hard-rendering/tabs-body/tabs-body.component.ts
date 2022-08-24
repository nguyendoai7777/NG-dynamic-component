import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tabs-body',
  templateUrl: './tabs-body.component.html',
  styleUrls: ['./tabs-body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsBodyComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('translateBox') translateBox!: ElementRef<HTMLElement>;
  @Input() tabsHeaderLength = 0;
  @Input() currentTabHeaderIndex = 0;
  changeTime = 0;

  constructor(
    private readonly elr: ElementRef<HTMLElement>
  ) {
    elr.nativeElement.classList.add("tabs-body-root");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeTime++;
    if (this.changeTime > 1) {
      this.surfing();
    }
  }

  ngOnInit(): void {
    const contentList = this.elr.nativeElement.children[0].children;
    const nodeList = Array.from(contentList) as unknown as HTMLElement[];
    console.log(this.elr.nativeElement.children[0]);
    const contentLength = nodeList.length;
    if (this.tabsHeaderLength !== contentLength) {
      return console.error('children (content length) must me equal tabsHeaderLength. content length = ', contentLength, '& tabsHeaderLength = ', this.tabsHeaderLength);
    }
  }

  ngAfterViewInit() {
    this.translateBox.nativeElement.style.transform = `translateX(-${this.translateBox.nativeElement.offsetWidth * this.currentTabHeaderIndex}px)`;
    const setTransitionFunction = setTimeout(() => {
      this.translateBox.nativeElement.style.transition = '.3s ease-in';
      clearTimeout(setTransitionFunction);
    }, 100);
    /*const subs = Array.from(this.translateBox.nativeElement.children) as unknown as HTMLElement[];
    subs.forEach(sub => {
      console.log(sub)
      sub.style.width = this.translateBox.nativeElement.parentElement!.offsetWidth + 'px';
    })*/
  }

  surfing() {
    this.translateBox.nativeElement.style.transform = `translateX(-${this.translateBox.nativeElement.offsetWidth * this.currentTabHeaderIndex}px)`;
  }

}
