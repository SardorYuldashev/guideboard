/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('guides').del()
  await knex('guides').insert([
    {
      // id: 1,
      title: "Birinchi qoida sarlavhasi",
      content: "Birinchi qoida matni"
    },
    {
      // id: 2,
      title: "Ikkinchi qoida sarlavhasi",
      content: "Ikkinchi qoida matni"
    },
    {
      // id: 3,
      title: "Uchinchi qoida sarlavhasi",
      content: "Uchinchi qoida matni"
    },
    {
      // id: 3,
      title: "To'rtinchi qoida sarlavhasi",
      content: "To'rtinchi qoida matni"
    },
  ]);
};
