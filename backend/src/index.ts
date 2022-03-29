import { fastify } from "fastify";
// import ORMconfig from "./ormconfig";
// import fastifyTypeorm from "fastify-typeorm-plugin";
import authRoutes from "./routes/auth.router";
import boardRoutes from "./routes/board.router";
import taskRoutes from "./routes/task.router";
import { swagger } from "./utils/registers";

const port = process.env.port || 3000;

const server = fastify({ logger: true });

server.register(require("fastify-swagger"), swagger);

server.setErrorHandler((error, request, reply) => {
  console.log(error);
  reply.status(reply.statusCode).send(error);
});


// server.register(require("fastify-cors"), () => (req, callback) => {
//   let corsOptions;
//   const { origin } = req.headers;
//   if (/192.168.1/.test(origin)) {
//     corsOptions = { origin: false };
//   } else {
//     corsOptions = { origin: true };
//   }
//   callback(null, corsOptions);
// });


// server.get('api/boards', (req: any, reply: any) => {
//   reply.send({ hello: 'world' })
// })


server
  .register(authRoutes, { prefix: "api/auth" })
  .register(boardRoutes, {prefix: "api/boards"})
  .register(taskRoutes, {prefix: "api/tasks"});


// server.register(fastifyTypeorm, ORMconfig);

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