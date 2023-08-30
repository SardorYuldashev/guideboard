const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showUser = async ({ id }) => {
  const user = await db('users')
    .where({ id })
    .select()
    .first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  const guides = await db('user_guide')
    .select('*')
    .where({ user_id: id });

  let todo = [], read = [];

  guides.forEach((item) => {
    item.completed ? read.push(item) : todo.push(item);
  });

  return {
    ...user,
    total_guide: guides.length,
    todo_guides: todo.length,
    read_guides: read.length,
  };
};

module.exports = showUser;