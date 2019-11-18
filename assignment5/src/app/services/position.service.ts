import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  positionsURL:string = 'http://teams-api-data.herokuapp.com/positions';

  constructor(private http:HttpClient) { }

  getPositions():Observable<Position[]> {
    return this.http.get<Position[]>(this.positionsURL);
  }

}
