const db = require('../../db');

const listGuides = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' }, filters = {} }) => {
  const dbQuery = db('guides')
    .select();

  const queryClone = db("guides").select("id").where(filters);

  if (q) {
    dbQuery.andWhereILike('title', `%${q}%`);
    queryClone.andWhereILike('title', `%${q}%`);
  };

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  const total = (await queryClone).length;

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