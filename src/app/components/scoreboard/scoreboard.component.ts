import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { ScoresService } from '../../services/game/scores.service';

@Component({
  selector: 'mlb-data-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.styl']
})
export class ScoreboardComponent implements OnInit {

  public scoreBoard: any; // TODO: No empties!
  @Input() games: any;

  constructor(
    private scores: ScoresService,
    private util: UtilService
  ) {}

  ngOnInit() {

   const today = this.util.getToday();
   const day = today.day;
   const month = today.month;
   const year = today.year;

   // Get today's scores

    this.scores.getMasterScoreboard(day, month, year)
      .subscribe(
        (games: Array<any>) => {
          this.scoreBoard = games;
        }
    );

  }

}
