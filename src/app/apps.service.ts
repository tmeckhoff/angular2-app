import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { App } from 'app.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppsService {
  constructor (private http: Http) {}

  private appsUrl = 'https://cdn-dev.linkhealth.com/nr-test/nr-apps.json';

  getApps() : Observable<App[]> {

    // ...using get request
    return this.http.get(this.appsUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
