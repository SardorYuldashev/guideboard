const db = require('../../db');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const removeComment = async ({ id, user }) => {
  const comment = await db('comments')
    .where({ id })
    .select()
    .first();

  if (!comment) {
    throw new NotFoundError("Sharh topilmadi");
  };

  if (user.role === "admin") {
    const result = await db('comments')
      .where({ id })
      .delete()
      .returning('*');

    return result[0];
  };

  if (comment.user_id !== user.id) {
    throw new ForbiddenError("Boshqalarni sharhini o'chira olmaysiz.")
  };

  const result = await db('comments')
    .where({ id })
    .delete()
    .returning('*');

  return result[0];
};

module.exports = removeComment;