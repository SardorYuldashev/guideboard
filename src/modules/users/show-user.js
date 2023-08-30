const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showUser = async ({ id }) => {
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
        ) as total_guides
      `),
    )
    .groupBy('users.id')
    .first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  let todo = [], read = [];

  user.total_guides.forEach((item) => {
    item.completed ? read.push(item) : todo.push(item);
  });

  return {
    ...user,
    total_guides: user.total_guides.length,
    todo_guides: todo.length,
    read_guides: read.length
  };
};

module.exports = showUser;