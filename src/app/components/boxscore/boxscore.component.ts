import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../../services/game/scores.service';


@Component({
  selector: 'mlb-data-boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.styl']
})
export class BoxscoreComponent implements OnInit {

  private boxscore: any;

  constructor(
    private scoresService: ScoresService
  ) { }

  ngOnInit() {
    this.scoresService.boxscoreObservable.subscribe(
      data => {
        this.boxscore = data;
      }
    );
  }

}
