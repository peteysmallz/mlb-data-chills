import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../../services/server.service';

import 'rxjs'; // TODO: Reference specific library

@Injectable()
export class ScoresService {

  private ROOT_URL = 'http://gd2.mlb.com/components/game/mlb/';
  public boxscore: any;
  public boxscoreObservable: Observable<any>;
  public boxscoreNotify: any;

  constructor(
    private http: Http,
    private server: ServerService
  ) {
      this.boxscoreObservable = new Observable(
        (observer: any) => this.boxscoreNotify = observer
      ).share();
  }

  getMasterScoreboard(day: string, month: string, year: string) {
    return this.http.get(this.ROOT_URL + 'year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json')
      .map(this.server.extractData)
      .map((data) => data.games)
      .map((data) => data.game)
      .catch(this.server.handleError);
  }

  getBoxscore(day: string, month: string, year: string, ateam: string, hteam: string) {
    return this.http.get('http://mlb.mlb.com/gdcross/components/game/mlb/' + 'year_' + year + '/month_' + month + '/day_' + day + '/gid_' + year + '_' + month + '_' + day + '_' + ateam + 'mlb_' + hteam + 'mlb_1/boxscore.json')
      .map(this.server.extractData)
      .map((data) => data.boxscore)
      .catch(this.server.handleError);
  }

  fetchBoxscore(day: string, month: string, year: string, awayTeam: string, homeTeam: string) {
    this.getBoxscore(day, month, year, awayTeam, homeTeam).subscribe(
      (boxscore: any) => {
        this.boxscore = {};
        this.boxscore = boxscore;
        this.boxscoreNotify.next(this.boxscore);
      },
      err => console.log('NO BOXSCORE YET! CHILL')
    );
  };

  pollBoxscore(day: string, month: string, year: string, awayTeam: string, homeTeam: string) {
    return Observable.interval(5000)
      .switchMap(() => this.getBoxscore(day, month, year, awayTeam, homeTeam));
  }
}
