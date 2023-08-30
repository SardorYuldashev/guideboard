const db = require('../../db');

const listAllUserGuide = async ({ page = { limit: 10, offset: 0 }, filters = { completed: false } }) => {
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

module.exports = listAllUserGuide;