import { BoardId, CreateBoard, UpdateBoard } from "../interfaces/board.interface";

const boards = [
    { id: 1, title: 'Web Sailers 1', description: 'description', userId: 1},
    { id: 2, title: 'Web Sailers 2', description: 'description', userId: 1},
    { id: 3, title: 'Web Sailers 3', description: 'description', userId: 1},
    { id: 4, title: 'Web Sailers 4', description: 'description', userId: 1},
    { id: 5, title: 'Web Sailers 5', description: 'description', userId: 1}
];

export const getBoardById = async (boardId: number) => {
    return boards.find(board => board.id === boardId);
};

export const getBoards = async () => {
    return boards;
};

export const createBoard = (data: CreateBoard) => {

};

export const updateBoard = (data: UpdateBoard) => {

};

export const deleteBoard = (id: BoardId) => {

};