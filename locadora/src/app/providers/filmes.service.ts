import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class FilmesService {

  constructor(public http: Http ) { }

  getFilmes() {
    const headers =  new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content Type');
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get('http://localhost:61437/api/Filme', {headers: headers}).map(res => res.json());
  }
}
