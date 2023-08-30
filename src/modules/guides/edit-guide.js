const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const editGuide = async ({ id, ...changes }) => {
  const existing = await db('guides').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  if (!changes.title && !changes.content) {
    return existing;
  };

  const result = await db('guides')
    .where({ id })
    .update({ title: changes.title, content: changes.content })
    .returning(['*']);

  if (typeof changes.notify === 'boolean' && changes.notify === true) {
    const users = await db('users')
      .select();

    users.forEach(async item => {
      await db('user_guide').insert({ guide_id: result[0].id, user_id: item.id });
    });

    result[0].notified = true;
  };

  return result[0];
};

module.exports = editGuide;