export const swagger = {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
    info: { title: "fastify-api" },
    schemes: ["http"],
    securityDefinitions: {
    Authorization: {
        type: "apiKey",
        name: "apiKey",
        in: "header",
    },
    },
    },
};

export const cors = (req: any, callback: any) => {
    let corsOptions;
    const { origin } = req.headers;
    if (/192.168.1/.test(origin)) {
      corsOptions = { origin: false };
    } else {
      corsOptions = { origin: true };
    }
    callback(null, corsOptions);
};