import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1746843785753 implements MigrationInterface {
    name = 'InitMigration1746843785753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Country_TB" ("id" SERIAL NOT NULL, "CountryCode" character varying(4) NOT NULL, "CountryName" character varying(100) NOT NULL, CONSTRAINT "PK_28a101fd4d9e0a9d8c38af41961" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ContactInfo_TB" ("id" SERIAL NOT NULL, "Address" character varying(60) NOT NULL, "City" character varying(50) NOT NULL, "Phone" character varying(20) NOT NULL, "CelPhone" character varying(20) NOT NULL, "EmergencyName" character varying(100) NOT NULL, "EmergencyPhone" character varying(20) NOT NULL, "UserID" integer NOT NULL, "CountryID" integer, CONSTRAINT "REL_21f472f5ecf1566435c38df1d1" UNIQUE ("UserID"), CONSTRAINT "PK_c083c975be44d86a74331ddd0d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "AppUser_TB" ("id" SERIAL NOT NULL, "Name" character varying(20) NOT NULL, "LastName" character varying(20) NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying, "emailVerified" boolean NOT NULL DEFAULT false, "verificationToken" character varying, "IsMilitar" boolean NOT NULL DEFAULT false, "isTemporal" boolean NOT NULL DEFAULT false, "TimeCreate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_cb985f8eccb34fe15bd6ef9b0e6" UNIQUE ("username"), CONSTRAINT "PK_c2d90f68d3424c529ec8c5424ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "TypeDocument_TB" ("id" SERIAL NOT NULL, "NameTypeDocument" character varying(50) NOT NULL, CONSTRAINT "PK_4c9d8ef18545cbefba4d3e7c322" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserDocument_TB" ("UserID" integer NOT NULL, "Document" character varying(20) NOT NULL, "PlaceExpedition" character varying(60) NOT NULL, "DateExpedition" date NOT NULL, "TypeDocumentID" integer, CONSTRAINT "PK_b94fa61e3d43e170d8ac78fae4e" PRIMARY KEY ("UserID"))`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ADD CONSTRAINT "FK_21f472f5ecf1566435c38df1d10" FOREIGN KEY ("UserID") REFERENCES "AppUser_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" ADD CONSTRAINT "FK_3ad7af5ea615603af053a5300b0" FOREIGN KEY ("CountryID") REFERENCES "Country_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "AppUser_TB" ADD CONSTRAINT "FK_c2d90f68d3424c529ec8c5424ee" FOREIGN KEY ("id") REFERENCES "UserDocument_TB"("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_b94fa61e3d43e170d8ac78fae4e" FOREIGN KEY ("UserID") REFERENCES "AppUser_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" ADD CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0" FOREIGN KEY ("TypeDocumentID") REFERENCES "TypeDocument_TB"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_2e3a1a033deebb0b6a2412c67a0"`);
        await queryRunner.query(`ALTER TABLE "UserDocument_TB" DROP CONSTRAINT "FK_b94fa61e3d43e170d8ac78fae4e"`);
        await queryRunner.query(`ALTER TABLE "AppUser_TB" DROP CONSTRAINT "FK_c2d90f68d3424c529ec8c5424ee"`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" DROP CONSTRAINT "FK_3ad7af5ea615603af053a5300b0"`);
        await queryRunner.query(`ALTER TABLE "ContactInfo_TB" DROP CONSTRAINT "FK_21f472f5ecf1566435c38df1d10"`);
        await queryRunner.query(`DROP TABLE "UserDocument_TB"`);
        await queryRunner.query(`DROP TABLE "TypeDocument_TB"`);
        await queryRunner.query(`DROP TABLE "AppUser_TB"`);
        await queryRunner.query(`DROP TABLE "ContactInfo_TB"`);
        await queryRunner.query(`DROP TABLE "Country_TB"`);
    }

}
