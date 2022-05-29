import { MigrationInterface, QueryRunner } from 'typeorm';

export class userTable1652616104741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user (
            id varchar(36),
            name varchar(64) NOT NULL,
            password varchar(256) NOT NULL,
            description varchar(256) DEFAULT NULL,
            image varchar(48) DEFAULT NULL,
            status tinyint NOT NULL DEFAULT '1',
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table user`);
  }
}
