const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const addComment = async ({ body, user }) => {
  const guide = await db('guides')
    .where({ id: body.guide_id })
    .select()
    .first();

  if (!guide) {
    throw new NotFoundError("Mavjud bo'lmagan qoida");
  };

  const result = await db('comments')
    .insert({ user_id: user.id, ...body })
    .returning('*');

  return result[0];
};

module.exports = addComment;