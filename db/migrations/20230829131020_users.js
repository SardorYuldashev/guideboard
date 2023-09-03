/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 50).notNullable().checkLength('>=', 3);
    table.string('last_name', 70).notNullable().checkLength('>=', 3);
    table.integer('age').notNullable();
    table.enum('role', ['employee', 'admin']).notNullable();
    table.string('username', 30).unique().notNullable().checkLength('>=', 3);
    table.string('password', 350).notNullable().checkLength('>=', 4);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};