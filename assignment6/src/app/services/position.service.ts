import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Position } from '../models/position';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http:HttpClient) { }
  positionsURL = "http://teams-api-data.herokuapp.com/"

  getPositions():Observable<Position[]> {
    return this.http.get<Position[]>(`${this.positionsURL}positions`);
  }

  savePosition(position: Position) {
    return this.http.put<Position[]>(`${this.positionsURL}position/${position._id}`, position);
  }

  getPosition(id: string): Observable<Position[]>{
    return this.http.get<Position[]>(`${this.positionsURL}position/${id}`);
  }

}
