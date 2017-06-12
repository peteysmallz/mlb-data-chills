import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../../services/game/scores.service';


@Component({
  selector: 'mlb-data-boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.styl']
})
export class BoxscoreComponent implements OnInit {

  private boxscore: any;
  private homeData: any;
  private awayData: any;
  public homeDoubles: any;
  public awayDoubles: any;
  public homeTriples: any;
  public awayTriples: any;
  public homeHomeRuns: any;
  public awayHomeRuns: any;

  constructor(
    private scoresService: ScoresService
  ) { }

  ngOnInit() {

    this.scoresService.boxscoreObservable.subscribe(
      data => {
        this.boxscore = data;
        this.homeData = data.batting[0].text_data;
        this.awayData = data.batting[1].text_data;
        console.log('home data: ', this.homeData);

        if (data.batting[0].d !== '0') {
          this.homeDoubles = this.homeData.match(/<doubles>(.*?)<\/doubles>/g).map((val) => {
            return val.replace(/<\/?doubles>/g, '');
          });
        }

        if (data.batting[1].d !== '0') {
          this.awayDoubles = this.awayData.match(/<doubles>(.*?)<\/doubles>/g).map((val) => {
            return val.replace(/<\/?doubles>/g, '');
          });
        }

        if (data.batting[0].t !== '0') {
          this.homeTriples = this.homeData.match(/<triples>(.*?)<\/triples>/g).map((val) =>  {
            return val.replace(/<\/?triples>/g, '');
          });
        }

        if (data.batting[1].t !== '0') {
          this.awayTriples = this.awayData.match(/<triples>(.*?)<\/triples>/g).map((val) =>  {
            return val.replace(/<\/?triples>/g, '');
          });
        }

        if (data.batting[0].hr !== '0') {
          this.homeHomeRuns = this.homeData.match(/<home_runs>(.*?)<\/home_runs>/g).map((val) => {
            return val.replace(/<\/?home_runs>/g, '');
          });
        }

        if (data.batting[1].hr !== '0') {
          this.awayHomeRuns = this.awayData.match(/<home_runs>(.*?)<\/home_runs>/g).map((val) => {
            return val.replace(/<\/?home_runs>/g, '');
          });
        }

      }
    );
  }

}
