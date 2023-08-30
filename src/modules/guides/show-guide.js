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

  const revisions = await db('user_guide')
    .select()
    .where({ guide_id: id });

  return {
    ...guide,
    revisions: revisions.length,
  };
};

module.exports = showGuide;