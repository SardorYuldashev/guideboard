/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 70).notNullable();
    table.integer('age').notNullable();
    table.enum('role', ['employee', 'admin']).notNullable();
    table.string('username', 30).unique().notNullable();
    table.string('password', 350).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};