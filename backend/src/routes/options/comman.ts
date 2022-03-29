const commonResponceSchema = {
    message: { type: "string" },
    statusCode: { type: "number" },
};

export const getSuccesResponseSchema = (schema: object) => ({
    type: "object",
    properties: {
        ...commonResponceSchema,
        result: schema,
    },
});

export default commonResponceSchema;
