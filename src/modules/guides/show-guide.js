const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showGuide = async ({ id }) => {
  const guide = await db('guides')
    .leftJoin('user_guide', 'user_guide.guide_id', 'guides.id')
    .where({ 'guides.id': id })
    .select(
      'guides.*',
      db.raw(`COUNT(user_guide.id) as revisions`)
    )
    .groupBy('guides.id')
    .first();

  if (!guide) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  return guide
};

module.exports = showGuide;
