const db = require('../../db');

const listUserGuide = async ({ user, page = { limit: 10, offset: 0 }, filters = { completed: false } }) => {
  filters.user_id = user.id;

  const dbQuery = db('user_guide')
    .select()
    .where(filters);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  return {
    data,
    pageInfo: {
      "total": data.length,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listUserGuide;