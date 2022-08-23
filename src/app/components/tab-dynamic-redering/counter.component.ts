import { Component, OnInit } from '@angular/core';

let count = 1;

@Component({
  selector: 'counter',
  template:`
    <pre>{{count}}</pre>
  `
}) export class CounterComponent implements OnInit {
  count = count++;
  ngOnInit() {

  }
}
