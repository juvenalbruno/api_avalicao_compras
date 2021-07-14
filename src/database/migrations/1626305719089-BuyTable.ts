import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class BuyTable1626305719089 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'buy',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'product',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'varchar'
                    },
                    {
                        name: 'shop_id',
                        type:'uuid'
                    },
                    {
                        name: 'collaborator_id',
                        type: 'uuid'
                    },
                    {
                        name: 'client_id',
                        type: 'uuid'
                    }
                ],

                foreignKeys: [
                    {
                        name: 'FKShop',
                        referencedTableName: 'shop',
                        referencedColumnNames: ['id'],
                        columnNames: ['shop_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKCollaborator',
                        referencedTableName: 'collaborator',
                        referencedColumnNames: ['id'],
                        columnNames: ['collaborator_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKClient',
                        referencedTableName: 'client',
                        referencedColumnNames: ['id'],
                        columnNames: ['client_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('buy');
    }

}
