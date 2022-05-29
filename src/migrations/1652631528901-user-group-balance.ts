import { MigrationInterface, QueryRunner } from 'typeorm';

export class userGroupBalance1652631528901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user_group_balance (
            id varchar(36),
            user_idA varchar(64) NOT NULL,
            user_idB varchar(64) DEFAULT NULL,
            balance varchar(64) DEFAULT NULL,
            group_id varchar(64) DEFAULT NULL,
            status tinyint NOT NULL DEFAULT '1',
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table user_group_balance`);
  }
}
