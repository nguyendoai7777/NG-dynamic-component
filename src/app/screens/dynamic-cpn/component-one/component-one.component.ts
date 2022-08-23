import { Component, OnInit } from '@angular/core';
let x = 1;
@Component({
  selector: 'component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {
  x = x++;
  constructor() { }

  ngOnInit(): void {
    console.log('1 init')
  }

}
