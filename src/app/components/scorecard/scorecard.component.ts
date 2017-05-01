import { Component, OnInit, Input } from '@angular/core';
import { ScoresService } from '../../services/game/scores.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'mlb-data-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.styl']
})
export class ScorecardComponent implements OnInit {

  @Input() game: {};

  constructor(
    private scores: ScoresService,
    private util: UtilService
  ) {}

  ngOnInit() {
  }
}
