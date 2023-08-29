const db = require('../../db');
const { hash } = require('bcryptjs');

const editMe = async ({ id, ...changes }) => {
  const result = await db('users')
    .where({ id })
    .update({ ...changes })
    .returning(['*']);

  return result[0];
};

module.exports = editMe;