import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LicenseEntity } from './article';
import {map} from 'rxjs/operators';

@Injectable()
export class LicenseService {


  host = 'http://localhost:8080';
  constructor(private http: Http) {
  }

  generare(json): Observable<String> {
    return this.http.get(this.host + '/license/sendjson1/' + json).map(data => data.text())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
