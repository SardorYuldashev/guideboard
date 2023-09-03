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
    {
      // id: 6,
      guide_id: 2,
      user_id: 8,
    },
    {
      // id: 7,
      guide_id: 3,
      user_id: 6,
    },
    {
      // id: 8,
      guide_id: 4,
      user_id: 7,
    },
    {
      // id: 9,
      guide_id: 6,
      user_id: 10,
    },
    {
      // id: 10,
      guide_id: 5,
      user_id: 8,
    },
    {
      // id: 11,
      guide_id: 3,
      user_id: 7,
    },
    {
      // id: 12,
      guide_id: 1,
      user_id: 9,
    },
    {
      // id: 13,
      guide_id: 5,
      user_id: 7,
    },
    {
      // id: 14,
      guide_id: 4,
      user_id: 4,
    },
    {
      // id: 15,
      guide_id: 5,
      user_id: 10,
    },
    {
      // id: 16,
      guide_id: 6,
      user_id: 8,
    },
    {
      // id: 17,
      guide_id: 1,
      user_id: 7,
    },
    {
      // id: 18,
      guide_id: 3,
      user_id: 9,
    },
    {
      // id: 19,
      guide_id: 2,
      user_id: 2,
    },
  ]);
};
