import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("client")
class Client {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    @UpdateDateColumn()
    tel: string;

    @Column()
    @UpdateDateColumn()
    email: string;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export { Client }