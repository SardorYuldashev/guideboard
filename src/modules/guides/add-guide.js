const db = require('../../db');

const addGuide = async (data) => {
  const result = await db('guides')
    .insert({ title: data.title, content: data.content })
    .returning('*');

  if (typeof data.notify === 'boolean' && data.notify === true) {
    const users = await db('users')
      .select();

    const notifications = users.map(user => ({ guide_id: result[0].id, user_id: user.id }))
    await db('user_guide').insert(notifications);

    result[0].notified = true;
  };

  return result[0];
};

module.exports = addGuide;