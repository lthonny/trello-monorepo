import {BoardSchema} from "./schemas";
import { getSuccesResponseSchema } from "./comman";

export default {
    getOne: {
        schema:  {
            tags: ["Boards"],
            summary: "Get board by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(BoardSchema)
            }
        }
    },
    getAll: {
        schema:  {
            tags: ["Boards"],
            summary: "Get board by id",
            response: {
                200: getSuccesResponseSchema({ type: "object", items: BoardSchema })
            }
        }
    },
    create: {
        schema:  {
            tags: ["Boards"],
            summary: "Get board by id",
            response: {
                200: getSuccesResponseSchema(BoardSchema),
            },
        }
    },
    update: {
        schema:  {
            tags: ["Boards"],
            summary: "Update board by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(BoardSchema),
            },
        }
    },
    delete: {
        schema:  {
            tags: ["Boards"],
            summary: "Delete board by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(BoardSchema),
            },
        }
    }
}