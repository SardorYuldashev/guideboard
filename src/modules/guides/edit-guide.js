const db = require('../../db');

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
    result[0].notified = true;
    console.log('true keldi');
  };

  return result[0];
};

module.exports = editGuide;