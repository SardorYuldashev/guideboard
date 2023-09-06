const db = require('../../db');

const listAllUserGuide = async ({ page = { limit: 10, offset: 0 }, filters = {} }) => {
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
      `),
      db.raw(`
        CASE WHEN user_guide.user_id IS NULL THEN NULL
        ELSE json_build_object(
          'id', users.id,
          'first_name', users.first_name,
          'last_name', users.last_name,
          'username', users.username,
          'role', users.role
        ) END as user
      `),
    )
    .where(filters)
    .groupBy('user_guide.id', 'guides.id', 'users.id');

  dbQuery.orderBy('id', "asc");

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  const total = (await db("user_guide").select("id").where(filters)).length;

  return {
    data,
    pageInfo: {
      "total": total,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listAllUserGuide;