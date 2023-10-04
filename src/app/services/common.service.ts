import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  // getCountriesData() {
  //   return this.http.get('https://api.first.org/data/v1/countries').pipe(
  //     map((resp: any) => {
  //       return resp.data;
  //     })
  //   );
  // }

  getCountriesData(): Observable<any> {
    const url: string = '/assets/data.json';
    return this.http.get(url);
  }
}
