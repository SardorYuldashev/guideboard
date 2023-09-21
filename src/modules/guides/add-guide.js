const db = require('../../db');

const addGuide = async (data) => {
  const result = await db('guides')
    .insert({ title: data.title, content: data.content })
    .returning('*');

  if (data.notify) {
    const users = await db('users')
      .select();

    users.forEach(async item => {
      await db('user_guide')
        .insert({ guide_id: result[0].id, user_id: item.id });
    });

    result[0].notified = true;
  };

  return result[0];
};

module.exports = addGuide;
