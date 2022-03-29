import {TaskSchema} from "./schemas";
import { getSuccesResponseSchema } from "./comman";

export default {
    getOne: {
        schema:  {
            tags: ["Tasks"],
            summary: "Get task by id"
        },
        params: {
            taskId: {
                type: "number",
            },
        },
        response: {
            200: getSuccesResponseSchema(TaskSchema)
        }
    },
    getAll: {
        schema: {
            tags: ["Tasts"],
            summary: "Get all tasks",
            response: {
                200: getSuccesResponseSchema({ type: "object", items: TaskSchema })
            }
        },
    },
    create: {
        schema: {
            tags: ["Tasts"],
            summary: "Create new task",
            response: {
                200: getSuccesResponseSchema(TaskSchema),
            },
        }
    },
    update: {
        schema: {
            tags: ["Tasts"],
            summary: "Update task by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(TaskSchema),
            },
        }
    },
    delete: {
        schema: {
            tags: ["Tasts"],
            summary: "Delete task by id",
            params: {
                taskId: {
                    type: "number",
                },
            },
            response: {
                200: getSuccesResponseSchema(TaskSchema),
            },
        }
    }
}