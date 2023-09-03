const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
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
      age: 23,
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
    {
      // id: 6,
      first_name: 'Oybek',
      last_name: 'Xasanov',
      age: 22,
      role: 'employee',
      username: 'oybek',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 7,
      first_name: 'Begzod',
      last_name: "To'ychiyev",
      age: 29,
      role: 'employee',
      username: 'begzod',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 8,
      first_name: 'Bunyod',
      last_name: "Jo'rayev",
      age: 26,
      role: 'employee',
      username: 'bunyod',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 9,
      first_name: 'Barat',
      last_name: "Xusanov",
      age: 19,
      role: 'employee',
      username: 'barat',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      // id: 9,
      first_name: 'Akmal',
      last_name: "Usmonov",
      age: 27,
      role: 'employee',
      username: 'akmal',
      password: bcrypt.hashSync('1234', 10),
    },
  ]);
};