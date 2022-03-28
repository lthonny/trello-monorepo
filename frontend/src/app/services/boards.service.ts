import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Board, CreateBoard, UpdateBoard } from '../interfaces/boards.interface';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(
    private http: HttpClient,
  ) { }

    public getOne$(boardId: number): Observable<Board> {
      return this.http.get<Board>(`/api/boards/${boardId}`);
    }

    public getAll$(): Observable<Board[]> {
      return this.http.get<Board[]>(`http://localhost:3000/api/boards`);
    }

    public create$(data: CreateBoard): Observable<Board> {
      return this.http.post<Board>(`/api/boards`, {data});
    }

    public update$(boardId: number, data: UpdateBoard): Observable<Board> {
      return this.http.put<Board>(`/api/boards/${boardId}`, {data});
    }

    public destroy$(boardId: number) {
      return this.http.delete(`/api/boards/${boardId}`);
    }
}
