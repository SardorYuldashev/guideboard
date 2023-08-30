const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const removeGuide = async ({ id }) => {
  const existing = await db('guides').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  const result = await db('guides')
    .where({ id })
    .delete()
    .returning('*');

  return result[0];
};

module.exports = removeGuide;