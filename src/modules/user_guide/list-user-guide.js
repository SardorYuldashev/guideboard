const db = require('../../db');

const listUserGuide = async ({ user, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' }, filters = {} }) => {
  if (user.role === "employee") {
    filters.user_id = user.id;
    filters.completed = false;
  };

  const dbQuery = db('user_guide')
    .select()
    .where({ ...filters });

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  return {
    data,
  };
};

module.exports = listUserGuide;