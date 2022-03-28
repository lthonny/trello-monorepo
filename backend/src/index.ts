import { fastify } from "fastify";
import ORMconfig from "./ormconfig";
import fastifyTypeorm from "fastify-typeorm-plugin";
import boardRoutes from "./routes/board.router";
import { swagger, cors } from "./utils/registers";

const port = process.env.port || 3000;

const server = fastify({ logger: true });

server.register(require("fastify-swagger"), swagger);
// server.register(require("fastify-cors"), cors);

// server.get('api/boards', (req: any, reply: any) => {
//   reply.send({ hello: 'world' })
// })


server.register(boardRoutes, {prefix: "api/boards"});


server.register(fastifyTypeorm, ORMconfig);

const start = async () => {
  try {
    console.log(`Server started successfully on the port, ${port}`);
    await server.listen(port);
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start();