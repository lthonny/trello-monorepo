import { FastifyInstance, FastifyPluginAsync } from "fastify";
import routerOptions from "./options/board.options";
import { BoardId, CreateBoard, UpdateBoard } from "../interfaces/board.interface";
import {getBoards, getBoardById} from "../services/board.service";
import { successResponse } from "../utils/buildResponse";

const BoardsRoute: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get('/', async () => {
        const boards = await getBoards;
        return successResponse(boards);
    });

    server.get<{Params: boardId}>('/:boardId', routerOptions.getOne, async (request) => {
        const { boardId } = request.params;
        const board = await getBoardById(boardId);
        return successResponse(board);
    });

    server.post<{Body: CreateBoard }>("/", async () => {
        const board = {};
        return successResponse(board);
    });

    server.put<{Params: BoardId, Body: UpdateBoard }>("/:boardId", async (request) => {
        const { boardId } = request.params;
        const board = {};
        return successResponse(board);
    });

    server.delete<{Params: BoardId}>("/:boardId", routerOptions.delete, async (request) => {
        const { boardId } = request.params;
        const board = {};
        return successResponse(board);
    });
};

export default BoardsRoute;