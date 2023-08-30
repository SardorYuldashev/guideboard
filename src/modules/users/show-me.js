const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showMe = async ({ id }) => {
  const user = await db('users')
    .leftJoin('user_guide', 'user_guide.user_id', 'users.id')
    .where({ 'users.id': id })
    .select(
      'users.*',
      db.raw(`
        COALESCE(
          json_agg(
            json_build_object(
              'id', user_guide.id,
              'completed', user_guide.completed
            ) 
          ) filter (where user_guide.user_id IS NOT NULL), '[]'
        ) as guides
      `),
    )
    .groupBy('users.id')
    .first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  let total = user.guides.length
  let todo = [], read = [];

  user.guides.forEach((item) => {
    item.completed ? read.push(item) : todo.push(item);
  });

  delete user.guides;

  return {
    ...user,
    total_guides: total,
    todo_guides: todo.length,
    read_guides: read.length
  };
};

module.exports = showMe;