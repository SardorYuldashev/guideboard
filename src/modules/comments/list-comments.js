const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const listUsers = async ({ guide_id }) => {
  const guide = await db("guides")
    .where({ id: guide_id })
    .select()
    .first();

  if (!guide) {
    throw new NotFoundError("Qoida topilmadi");
  };

  const dbQuery = db('comments')
    .leftJoin('users', 'users.id', 'comments.user_id')
    .where({ "comments.guide_id": guide_id })
    .select(
      'comments.id',
      'comments.content',
      'comments.guide_id',
      db.raw(`
        CASE WHEN comments.user_id IS NULL THEN NULL
        ELSE json_build_object(
          'id', users.id,
          'first_name', users.first_name,
          'last_name', users.last_name,
          'role', users.role
        ) END as user
      `),
    )
    .groupBy('comments.id', 'users.id');

  dbQuery.orderBy("id", "desc");

  const comments = await dbQuery;

  return comments;
};

module.exports = listUsers;