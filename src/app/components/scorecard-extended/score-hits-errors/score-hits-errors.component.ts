import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlb-data-score-hits-errors',
  templateUrl: './score-hits-errors.component.html',
  styleUrls: ['./score-hits-errors.component.styl', '../scorecard-extended.component.styl']
})
export class ScoreHitsErrorsComponent implements OnInit {

  @Input() game: {};

  constructor() { }

  ngOnInit() {
  }

}
