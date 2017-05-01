import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor() { }

  extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  extractDataCustom(res: Response) {
    const body = res.json();
    return body || { };
  }

  handleError (error: Response | any) {
    // Might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
