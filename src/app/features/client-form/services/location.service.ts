import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  loadProvinces(): Observable<any> {
    return this.http.get('https://apis.datos.gob.ar/georef/api/provincias');
  }

  loadCities(idSate: number): Observable<any> {
    return this.http.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idSate}`);
  }

  
}
