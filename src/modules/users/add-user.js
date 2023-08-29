const db = require('../../db');
const { hash } = require('bcryptjs');

const addUser = async (data) => {
  const hashedPassword = await hash(data.password, 10);

  const result = await db('users')
    .insert({ ...data, password: hashedPassword })
    .returning('*');

  return result;
};

module.exports = addUser;