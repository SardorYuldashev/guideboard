const db = require('../../db');

const listUsers = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' }, filters = {} }) => {
  const dbQuery = db('users')
    .select().where(filters)

  if (q) {
    dbQuery.andWhere(function () {
      this.whereILike('first_name', `%${q}%`).orWhereILike('last_name', `%${q}%`)
    })
  };

  const { count: total} = await dbQuery.clone().count({count: '*'});

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  return {
    data,
    pageInfo: {
      "total": total,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listUsers;