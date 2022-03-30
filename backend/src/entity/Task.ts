import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity({name: "tasks"})
export default abstract class BoardModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "title",
        length: 100
    })
    title: string;

    @Column({ 
        name: "description", 
        length: 1000 
    })
    description: string;

    @Column({ 
        name: "nameList", 
        length: 50 
    })
    name_list: string;

    @Column({ name: "board_id" })
    board_id: number;

    @Column({ name: "order" })
    order: number;

    @Column({ 
        name: "archive",
        default: false
    })
    archive: boolean;

    @Column({ 
        name: "done",
        default: false
    })
    done: boolean;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}