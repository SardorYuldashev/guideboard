const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showGuide = async ({ id }) => {
  const guide = await db('guides')
    .where({ id })
    .select()
    .first();

  if (!guide) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  return guide;
};

module.exports = showGuide;