import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1746928629500 implements MigrationInterface {
    name = 'InitMigration1746928629500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" DROP CONSTRAINT "FK_3ad7af5ea615603af053a5300b0"`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ALTER COLUMN "CountryID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ALTER COLUMN "TypeDocumentID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ADD CONSTRAINT "FK_3ad7af5ea615603af053a5300b0" FOREIGN KEY ("CountryID") REFERENCES "Country_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0" FOREIGN KEY ("TypeDocumentID") REFERENCES "TypeDocument_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0"`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" DROP CONSTRAINT "FK_3ad7af5ea615603af053a5300b0"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ALTER COLUMN "TypeDocumentID" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0" FOREIGN KEY ("TypeDocumentID") REFERENCES "TypeDocument_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ALTER COLUMN "CountryID" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ADD CONSTRAINT "FK_3ad7af5ea615603af053a5300b0" FOREIGN KEY ("CountryID") REFERENCES "Country_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
