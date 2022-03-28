import { FastifyInstance, FastifyPluginAsync } from "fastify";
import routerOptions from "./options/board.options";
import {BoardId} from "../interfaces/board.interface";
import { successResponse } from "../utils/buildResponse";

const boards = [
    { id: 1, title: 'Web Sailers 1', description: 'description', userId: 1},
    { id: 2, title: 'Web Sailers 2', description: 'description', userId: 1},
    { id: 3, title: 'Web Sailers 3', description: 'description', userId: 1},
    { id: 4, title: 'Web Sailers 4', description: 'description', userId: 1},
    { id: 5, title: 'Web Sailers 5', description: 'description', userId: 1}
];

const BoardsRoute: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get('/', async () => {
        return successResponse(boards);
    });

    server.get<{Params: BoardId}>('/:boardId', routerOptions.getOne, async (request) => {
        const { boardId } = request.params;
        const board = boards.find((b) => b.id === boardId);
        return successResponse(board);
    });

    // server.post<{Body: CreateBoard }>("", async () => {
    //     const board = {};
    //     return successResponse(board);
    // });

    // server.put<{Params: BoardId, Body: UpdateBoard }>("", async () => {
    //     const { boardId } = request.params;
    //     const board = {};
    //     return successResponse(board);
    // });

    server.delete<{Params: BoardId}>("/:boardId", routerOptions.delete, async (request) => {
        const { boardId } = request.params;
        const board = {};
        return successResponse(board);
    });
};

export default BoardsRoute;