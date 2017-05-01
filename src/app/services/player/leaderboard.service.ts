import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServerService } from '../../services/server.service';
import 'rxjs'; // TODO: Reference specific library

@Injectable()
export class LeaderboardService {

  private ROOT_URL = 'http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2017&sort_order=%27desc%27&sort_column=%27avg%27&stat_type=hitting&page_type=SortablePlayer&game_type=%27R%27&player_pool=QUALIFIER&season_type=ANY&sport_code=%27mlb%27&results=1000&recSP=1&recPP=10';

  constructor(
    private http: Http,
    private server: ServerService
  ) { }

  getLeaderboard(): Observable<any> {
    return this.http.get(this.ROOT_URL)
      .map(this.server.extractDataCustom)
      .map((data) => data.stats_sortable_player.queryResults)
      .map((data) => data.row)
      .catch(this.server.handleError);
  }
}
