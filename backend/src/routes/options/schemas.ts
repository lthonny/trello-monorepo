export const TaskSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        title: { type: "number" },
        description: { type: "string" },
        nameTaskList: { type: "string" },
        board_id: { type: "number" },
        order: { type: "number" },
        archive: { type: "boolean" },
        done: { type: "boolean" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
    }
};

export const BoardSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        title: { type: "string" },
        imageUrl: { type: "string" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
    }
};

export const UserSchema  = {
    type: "object",
    properties: {
        id: { type: "number" },
        email: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        phone: { type: "string" },
        role: { type: "string" },
        avatar: { type: "string" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
    }
};