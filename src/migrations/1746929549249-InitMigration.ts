import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1746929549249 implements MigrationInterface {
    name = 'InitMigration1746929549249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "AppUser_TB" DROP CONSTRAINT "FK_c2d90f68d3424c529ec8c5424ee"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "AppUser_TB" ADD CONSTRAINT "FK_c2d90f68d3424c529ec8c5424ee" FOREIGN KEY ("id") REFERENCES "UserDocument_TB"("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
