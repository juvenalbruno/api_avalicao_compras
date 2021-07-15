import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Buy } from "./Buy";

@Entity("experience")
class Experience {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    note: string;

    @Column()
    assessment: string;

    @Column()
    buy_id: string;
    
    @JoinColumn({ name: "buy_id" })
    @ManyToOne(() => Buy)
    buyId: Buy;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Experience }