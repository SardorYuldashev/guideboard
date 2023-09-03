const db = require('../../db');

const listGuides = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' } }) => {
  const dbQuery = db('guides')
    .select();

  if (q) {
    dbQuery.andWhereILike('title', `%${q}%`);
  };

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  const total = (await db("guides").select("id")).length;

  return {
    data,
    pageInfo: {
      "total": total,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listGuides;