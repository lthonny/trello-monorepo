import { FastifyInstance } from 'fastify';
import { FastifyPluginAsync } from 'fastify';

const AuthRoute: FastifyPluginAsync = async (server: FastifyInstance) => { 
    server.post('/', async () => {});
};

export default AuthRoute;