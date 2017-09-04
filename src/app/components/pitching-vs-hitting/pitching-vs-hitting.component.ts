import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlb-data-pitching-vs-hitting',
  templateUrl: './pitching-vs-hitting.component.html',
  styleUrls: ['./pitching-vs-hitting.component.styl']
})
export class PitchingVsHittingComponent implements OnInit {

  @Input() game: any;

  constructor() { }

  ngOnInit() {
  }

}
