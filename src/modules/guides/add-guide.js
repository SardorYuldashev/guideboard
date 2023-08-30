const db = require('../../db');

const addGuide = async (data) => {
  const result = await db('guides')
    .insert({ title: data.title, content: data.content })
    .returning('*');

  if (typeof data.notify === 'boolean' && data.notify === true) {
    result[0].notified = true;
  };

  return result[0];
};

module.exports = addGuide;