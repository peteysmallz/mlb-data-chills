import { Component } from '@angular/core';
import { Headers, Jsonp} from '@angular/http';

@Component({
  selector: 'mlb-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public result: any;
  constructor(private jsonp: Jsonp) {
    const url = 'https://api.twitter.com/1.1/search/tweets.json?q=montreal&callback=JSONP_CALLBACK';

    const headers = new Headers();
    headers.append('Authorization', 'Bearer AAAAAAAA(...)sw4U0oU%');

    jsonp.request(url, { method: 'Get', headers: headers })
      .subscribe((res) => {
        this.result = res.json();
      });
  }


}
