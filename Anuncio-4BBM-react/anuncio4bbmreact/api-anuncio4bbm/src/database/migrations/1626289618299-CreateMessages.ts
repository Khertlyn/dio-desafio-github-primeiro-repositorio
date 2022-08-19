import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnnouncement_ciad1626289618299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "announcement_ciad",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "tipo_anuncio_nome",
                        type: "varchar",
                    },
                    {
                        name: "tempo_nome",
                        type: "varchar"
                    },
                    {
                        name: "efetivo",
                        type: "number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("announcement_ciad");
    }

}
