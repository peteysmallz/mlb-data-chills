import { Component, OnInit, Input} from '@angular/core';
import { Response } from '@angular/http';
import { LeaderboardService } from '../../services/player/leaderboard.service';

@Component({
  selector: 'mlb-data-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.styl']
})
export class LeaderboardComponent implements OnInit {

  public leaderboard: any; // TODO: No empties!
  @Input() player: any;

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.leaderboardService.getLeaderboard().subscribe(
      (players: Array<any>) => {
        this.leaderboard = players;
      }
    );
  }

}
