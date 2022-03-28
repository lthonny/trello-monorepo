export interface Board {
    id: number,
    title: string,
    description: string,
    userId: number
}

export interface CreateBoard {
    id: number,
    title: string,
    description?: string,
    userId: number
}

export interface UpdateBoard {
    id: number,
    title?: string,
    description?: string,
    userId: number
}