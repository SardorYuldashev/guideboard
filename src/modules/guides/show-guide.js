const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showGuide = async ({ id }) => {
  const guide = await db('guides')
    .leftJoin('user_guide', 'user_guide.guide_id', 'guides.id')
    .where({ 'guides.id': id })
    .select(
      'guides.*',
      db.raw(`
        COALESCE(
          json_agg(
            json_build_object(
              'id', user_guide.id
            ) 
          ) filter (where user_guide.guide_id IS NOT NULL), '[]'
        ) as revisions
      `),
    )
    .groupBy('guides.id')
    .first();

  if (!guide) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  return {
    ...guide,
    revisions: guide.revisions.length,
  };
};

module.exports = showGuide;