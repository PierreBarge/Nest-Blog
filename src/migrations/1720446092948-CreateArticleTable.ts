import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1720446092948 implements MigrationInterface {
  name = 'CreateArticleTable1720446092948';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(100) NOT NULL, \`creationDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`article_entity\``);
  }
}
