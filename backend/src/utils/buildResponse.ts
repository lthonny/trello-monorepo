const buildResponse = <T>(statusCode: number, message: string, result: T): any => ({
    message,
    statusCode,
    result
});

export const successResponse = <T>(result: T) => buildResponse(200, "Success", result);
export default buildResponse;