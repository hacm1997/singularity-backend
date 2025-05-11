import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1746930339453 implements MigrationInterface {
    name = 'InitMigration1746930339453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP COLUMN "DateExpedition"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD "DateExpedition" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP COLUMN "DateExpedition"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD "DateExpedition" date NOT NULL`);
    }

}
