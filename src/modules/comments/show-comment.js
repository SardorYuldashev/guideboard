const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showComment = async ({ id }) => {
  const comment = await db("comments")
    .where({ id })
    .select()
    .first();

  if (!comment) {
    throw new NotFoundError("Sharh topilmadi");
  };

  return comment;
};

module.exports = showComment;