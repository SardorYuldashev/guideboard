const db = require('../../db');

const listUsers = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' }, filters = {} }) => {
  const dbQuery = db('users')
    .select();

  const queryClone = db("users").select("id").where(filters);

  if (q) {
    dbQuery.where(function () {
      this.whereILike('first_name', `%${q}%`).orWhereILike('last_name', `%${q}%`)
    }).andWhere(filters);
    
    queryClone.where(function () {
      this.whereILike('first_name', `%${q}%`).orWhereILike('last_name', `%${q}%`)
    }).andWhere(filters);
  };

  dbQuery.where(filters);

  queryClone.where(filters);

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

module.exports = listUsers;