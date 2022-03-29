import { TaskId, CreateTask, UpdateTask } from './../interfaces/task.interface';
import { FastifyInstance } from 'fastify';
import { FastifyPluginAsync } from 'fastify';

const TasksRouter: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get('/', async () => {

    });

    server.get<{Params: TaskId}>('/:taskId', async () => {

    });

    server.post<{Body: CreateTask}>('/', async () => {

    });

    server.put<{Params: TaskId, Body: UpdateTask}>('/:taskId', async () => {

    });

    server.delete<{Params: TaskId}>('/:taskId', async () => {

    });
};

export default TasksRouter;