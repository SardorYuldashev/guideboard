/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('user_guide').del()
  await knex('user_guide').insert([
    {
      // id: 1,
      guide_id: 1,
      user_id: 3,
    },
    {
      // id: 2,
      guide_id: 2,
      user_id: 5,
    },
    {
      // id: 3,
      guide_id: 2,
      user_id: 4,
    },
    {
      // id: 4,
      guide_id: 3,
      user_id: 3,
    },
    {
      // id: 5,
      guide_id: 3,
      user_id: 4,
    },
  ]);
};
