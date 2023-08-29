const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      // id: 1,
      first_name: 'Sardor',
      last_name: 'Yuldashev',
      age: 29,
      role: 'admin',
      username: 'sardor',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 2,
      first_name: 'Imron',
      last_name: 'Abdusalimov',
      age: 3,
      role: 'admin',
      username: 'imron',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 3,
      first_name: 'Aziz',
      last_name: 'Nabiyev',
      age: 18,
      role: 'employee',
      username: 'aziz',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 4,
      first_name: 'Sherzod',
      last_name: 'Arziyev',
      age: 22,
      role: 'employee',
      username: 'sherzod',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 5,
      first_name: 'Javohir',
      last_name: 'Umaraliyev',
      age: 26,
      role: 'employee',
      username: 'javohir',
      password: bcrypt.hashSync('1234', 10),
    },
  ]);
};