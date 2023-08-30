const db = require('../../db');

const listGuides = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' }, filters = {} }) => {
  const dbQuery = db('guides')
    .select()
    .where({ ...filters });

  if (q) {
    dbQuery.andWhereILike('title', `%${q}%`);
  };

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  return {
    data,
  };
};

module.exports = listGuides;