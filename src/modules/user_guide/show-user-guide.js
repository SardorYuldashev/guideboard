const db = require('../../db');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const showUserGuide = async ({ id, user }) => {
  const userGuide = await db('user_guide')
    .leftJoin('guides', 'guides.id', 'user_guide.guide_id')
    .leftJoin('users', 'users.id', 'user_guide.user_id')
    .where({ 'user_guide.id': id })
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
          'username', users.username
        ) END as user
      `),
    )
    .groupBy('user_guide.id', 'guides.id', 'users.id')
    .first();

  if (!userGuide) {
    throw new NotFoundError("Foydalanuvchi uchun qo'llanma topilmadi");
  };

  if (userGuide.user.id !== user.id) {
    throw new ForbiddenError("Boshqalarni qo'llanmasini ko'rish mumkin emas");
  };

  return userGuide;
};

module.exports = showUserGuide;