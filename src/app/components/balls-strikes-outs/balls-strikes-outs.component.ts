import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlb-data-balls-strikes-outs',
  templateUrl: './balls-strikes-outs.component.html',
  styleUrls: ['./balls-strikes-outs.component.styl']
})
export class BallsStrikesOutsComponent implements OnInit {

  @Input() game: {};

  constructor() { }

  ngOnInit() {
  }

}
