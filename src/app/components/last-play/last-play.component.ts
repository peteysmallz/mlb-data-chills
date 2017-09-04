import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlb-data-last-play',
  templateUrl: './last-play.component.html',
  styleUrls: ['./last-play.component.styl']
})
export class LastPlayComponent implements OnInit {

  @Input() game: {};

  constructor() { }

  ngOnInit() {
  }

}
