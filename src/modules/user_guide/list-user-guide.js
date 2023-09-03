const db = require('../../db');

const listUserGuide = async ({ user, page = { limit: 10, offset: 0 }, filters = { completed: false } }) => {
  filters.user_id = user.id;

  const dbQuery = db('user_guide')
    .leftJoin('guides', 'guides.id', 'user_guide.guide_id')
    .leftJoin('users', 'users.id', 'user_guide.user_id')
    .select(
      'user_guide.id',
      'user_guide.completed',
      db.raw(`
        CASE WHEN user_guide.guide_id IS NULL THEN NULL
        ELSE json_build_object(
          'id', guides.id,
          'title', guides.title,
          'content', guides.content
        ) END as guide
      `)
    )
    .where(filters)
    .groupBy('user_guide.id', 'guides.id');

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  return {
    data,
    pageInfo: {
      "total": data.length,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listUserGuide;