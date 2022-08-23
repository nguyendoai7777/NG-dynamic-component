import { Component, OnInit } from '@angular/core';

let b = 0;

@Component({
  selector: 'component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  b = b++;
  constructor() { }

  ngOnInit(): void {
    console.log('2 init')
  }

}
