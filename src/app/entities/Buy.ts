import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";
import { Collaborator } from "./Collaborator";
import { Shop } from "./Shop";

@Entity("buy")
class Buy {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    product: string;

    @Column()
    price: string;

    @Column()
    shop_id: string;

    @JoinColumn({ name: "shop_id" })
    @ManyToOne(() => Shop)
    shopId: Shop;

    @Column()
    collaborator_id: string;

    @JoinColumn({ name: "collaborator_id" })
    @ManyToOne(() => Collaborator)
    collaboratorId: Collaborator;

    @Column()
    client_id: string;

    @JoinColumn({ name: "client_id" })
    @ManyToOne(() => Client)
    clientId: Client;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Buy }