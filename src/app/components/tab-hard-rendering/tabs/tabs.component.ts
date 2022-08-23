import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { TabEmitProps } from './tabs.model';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
      $headerRadius: 8px;
      .tab-header {
        border-radius: $headerRadius $headerRadius  0 0 ;
        border: 1px solid #e5e5e5;
        position: relative;
        .surfing-ink-bar {
          position: absolute;
          bottom: 0;
          height: 2px;
          transition: all 0.5s ease-out;
        }
      }
      .tab-header-group {
        display: flex;
        .tab-header-item {
          height: 48px;
          // min-width: 160px;
          white-space: nowrap;
          padding: 0 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          user-select: none;
          transition: all 0.25s;
        }
      }

  `],

})
export class TabsComponent implements AfterViewInit, OnInit {
  @ViewChildren('tabItemList', {emitDistinctChangesOnly: true }) tabItemList!: QueryList<HTMLElement>;
  @ViewChild('inkBar', {static: true}) inkBar!: ElementRef<HTMLElement>;
  @Input() colorPalette = 'deeppink';
  @Input() activeIndex = 0;
  @Input() tabHeaderList: string[] = [];
  @Output() tabChanged = new EventEmitter<TabEmitProps>();
  error: string | null = null;
  constructor(
    private readonly elr: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef
  ) {
    elr.nativeElement.style.display = 'block';
    elr.nativeElement.style.setProperty('--color-palette', this.colorPalette)
  }

  ngOnInit() {
   /* if(!this.activeIndex) {
      this.activeIndex = 0;
    }*/
  }

  ngAfterViewInit(): void {
    if(this.activeIndex > this.tabHeaderList.length - 1) {
      this.error = `activeIndex can not bigger than ${this.tabHeaderList.length - 1}, activeIndex = ${this.activeIndex}.`;
      this.cdr.detectChanges();
      return console.error(this.error);
    }
    this.initInkBarProps(this.activeIndex);
    this.inkBar.nativeElement.style.backgroundColor = this.colorPalette;
    this.tabChanged.emit({name: this.tabHeaderList[this.activeIndex], index: this.activeIndex});
    this.cdr.detectChanges();
  }

  initInkBarProps(index: number): void {
    const list = Array.from(this.tabItemList) as unknown as ElementRef<HTMLElement>[];
    this.inkBar.nativeElement.style.left = list[index].nativeElement.offsetLeft + 'px';
    this.inkBar.nativeElement.style.width = list[index].nativeElement.offsetWidth + 'px';
  }
  changeTab(element: HTMLDivElement, {index, name}: TabEmitProps): void {
    this.activeIndex = index;
    this.inkBar.nativeElement.style.left = element.offsetLeft + 'px';
    this.inkBar.nativeElement.style.width = element.offsetWidth + 'px';
    this.tabChanged.emit({name, index});
  }
}
