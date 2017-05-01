import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../../services/server.service';
import 'rxjs'; // TODO: Reference specific library

@Injectable()
export class ScoresService {

  private ROOT_URL = 'http://gd2.mlb.com/components/game/mlb/';

  constructor(
    private http: Http,
    private server: ServerService
  ) { }

  getMasterScoreboard(day: string, month: string, year: string): Observable<any> {
    return this.http.get(this.ROOT_URL + 'year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json')
      .map(this.server.extractData)
      .map((data) => data.games)
      .map((data) => data.game)
      .catch(this.server.handleError);
  }
}
