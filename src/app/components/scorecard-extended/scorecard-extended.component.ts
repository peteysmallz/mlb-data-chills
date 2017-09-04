import { Component, OnInit, Input } from '@angular/core';
import { ScoresService } from '../../services/game/scores.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'mlb-data-scorecard-extended',
  templateUrl: './scorecard-extended.component.html',
  styleUrls: ['./scorecard-extended.component.styl']
})
export class ScorecardExtendedComponent implements OnInit {

  @Input() game: {};

  constructor(
    private scores: ScoresService,
    private util: UtilService
  ) {}

  ngOnInit() {

  }
}

