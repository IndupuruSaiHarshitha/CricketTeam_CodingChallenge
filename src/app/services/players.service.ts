import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  private apiUrl = 'http://localhost:9095/api/players';

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${id}`);
  }

  addPlayer(body: Player): Observable<Player> {
    
    console.log(body);
    return this.http.post<Player>('http://localhost:9095/api/players', body);
  }

  deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  searchPlayer(playerId: number): Observable<Player[]> {
  console.log(playerId);
  return this.http.get<Player[]>(`${this.apiUrl}/get/player/${playerId}`);
}
}