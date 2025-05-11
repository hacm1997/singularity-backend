import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1746930866527 implements MigrationInterface {
    name = 'InitMigration1746930866527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ALTER COLUMN "TypeDocumentID" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0" FOREIGN KEY ("TypeDocumentID") REFERENCES "TypeDocument_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ALTER COLUMN "TypeDocumentID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0" FOREIGN KEY ("TypeDocumentID") REFERENCES "TypeDocument_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
