import { Migration, DbConnection } from '@elements/application';

export default Migration.create({
  description: '{{description}}',

  async up(db: DbConnection) {
    /**
     * Example:
     *
     * await db.sql(`
     *    create extension if not exists "uuid-ossp";
     *
     *    create table users (
     *      id uuid primary key default uuid_generate_v1mc(),
     *      name text,
     *      created_at timestamp default current_timestamp,
     *      updated_at timestamp default current_timestamp
     *    );
     * `);
     */
  },

  async down(db: DbConnection) {
    /**
     * Example:
     *
     * await db.sql(`drop table users;`);
     */
  }
});
