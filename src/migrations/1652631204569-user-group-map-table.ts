import { MigrationInterface, QueryRunner } from 'typeorm';

export class userGroupMapTable1652631204569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user_map_with_group (
            id varchar(36),
            user_id varchar(64) NOT NULL,
            group_id varchar(64) DEFAULT NULL,
            status tinyint NOT NULL DEFAULT '1',
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table user_map_with_group`);
  }
}
