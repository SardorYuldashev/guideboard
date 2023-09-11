const db = require('../../db');
const { ForbiddenError, NotFoundError } = require('../../shared/errors');

const editComment = async ({ id, user, ...changes }) => {
  const comment = await db('comments')
    .where({ id })
    .select()
    .first();

  if (!comment) {
    throw new NotFoundError("Sharh topilmadi");
  };

  console.log(comment);

  if (comment.user_id !== user.id) {
    throw new ForbiddenError("Boshqalarni sharhini tahrirlay olmaysiz");
  };

  const result = await db('comments')
    .where({ id })
    .update(changes)
    .returning(['*']);

  return result[0];
};

module.exports = editComment;