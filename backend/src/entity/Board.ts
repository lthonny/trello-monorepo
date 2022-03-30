import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity({name: "boards"})
export default abstract class BoardModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "title",
        length: 100
    })
    title: string;

    @Column({ name: "image_url" })
    imageUrl: number;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}