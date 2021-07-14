import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ExperienceTable1626306046249 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'experience',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'note',
                        type: 'varchar'
                    },
                    {
                        name: 'assessment',
                        type: 'varchar'
                    },
                    {
                        name: 'buy_id',
                        type: 'uuid'
                    }
                ],

                foreignKeys: [
                    {
                        name: 'FKBuy',
                        referencedTableName: 'buy',
                        referencedColumnNames: ['id'],
                        columnNames: ['buy_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('experience')
    }

}
