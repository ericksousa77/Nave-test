import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNavers1614646728376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "navers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "birthdate",
                        type: "date",
                    },
                    {
                        name: "admission_date",
                        type: "date",
                    },
                    {
                        name: "job_role",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("navers");
    }

}
