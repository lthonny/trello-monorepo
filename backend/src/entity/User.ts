import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "email",
        length: 20
    })
    email: string

    @Column({
        name: "firstName",
        length: 15
    })
    firstName: string

    @Column({
        name: "lastName",
        length: 15
    })
    lastName: string

    @Column({
        name: "phone",
        length: 15
    })
    phone: string

    @Column({
        name: "role",
        length: 10
    })
    role: string

    @Column({
        name: "avatar"
    })
    avatar: string

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;
}
