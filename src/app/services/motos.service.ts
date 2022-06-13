import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Motos } from '../models/motos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  apiUrl = environment.apiUrl + 'motos.json';
  apiUrlDetail = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }
  
motos() :Observable<Motos[]> {
  return this.httpClient.get<Motos[]>(this.apiUrl);
}
detailMoto(id : number) {
  return this.httpClient.get(this.apiUrlDetail + 'motos/' + id + '.json')
}
type(type : string) :Observable<Motos[]> {
  return this.httpClient.get<Motos[]>(this.apiUrl + '?/type=' + type)
}
marque(marque : string):Observable<Motos[]> {
  return this.httpClient.get<Motos[]>(this.apiUrl + '?/marque=' + marque)
}

}
