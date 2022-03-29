import {UserSchema} from "./schemas";
import { getSuccesResponseSchema } from "./comman";

export default {
    getOne: {
        schema:  {
            tags: ["Users"],
            summary: "Get user by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(UserSchema)
            }
        }
    },
    getAll: {
        schema:  {
            tags: ["Users"],
            summary: "Get user by id",
            response: {
                200: getSuccesResponseSchema({ type: "object", items: UserSchema })
            }
        }
    },
    create: {
        schema:  {
            tags: ["Users"],
            summary: "Get user by id",
            response: {
                200: getSuccesResponseSchema(UserSchema),
            },
        }
    },
    update: {
        schema:  {
            tags: ["Users"],
            summary: "Get user by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(UserSchema),
            },
        }
    },
    delete: {
        schema:  {
            tags: ["Users"],
            summary: "Get user by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(UserSchema),
            },
        }
    }
}