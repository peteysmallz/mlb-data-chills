import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlb-data-bases-live',
  templateUrl: './bases-live.component.html',
  styleUrls: ['./bases-live.component.styl']
})
export class BasesLiveComponent implements OnInit {

  @Input() game: {};

  constructor() { }

  ngOnInit() {
  }

}
