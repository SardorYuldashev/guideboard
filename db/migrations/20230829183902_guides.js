/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('guides', (table) => {
    table.increments('id');
    table.string('title', 200).notNullable().checkLength('>=', 3);
    table.string('content', 1000).notNullable().checkLength('>=', 3);
    table.unique(['title', 'content']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('guides');
};