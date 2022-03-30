import { BoardsService } from '../../../services/boards.service';
import { Component, OnInit } from '@angular/core';
import { Board } from '../../../interfaces/boards.interface';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public boards: Board[] = [];

  constructor(
    private boardService: BoardsService
  ) { }

  ngOnInit(): void {
    this.boardService.getAll$().subscribe((board) => this.boards = board);
  }

}
