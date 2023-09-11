/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('comments').del()
  await knex('comments').insert([
    {
      // id: 1,
      guide_id: 1,
      user_id: 3,
      content: "Uzoqda yashaydiganlar nima qiladi?"
    },
    {
      // id: 2,
      guide_id: 3,
      user_id: 7,
      content: "Hammani oyligi bir xil emasmi?"
    },
    {
      // id: 3,
      guide_id: 3,
      user_id: 12,
      content: "Darsni boshqa kunga ko'chirish, oylikka ta'sir qilmaydimi?"
    },
    {
      // id: 4,
      guide_id: 1,
      user_id: 4,
      content: "Studentlar o'qishga qaytib, ko'chalar probkaga to'lib ketdi. Buni ham xisobga olasilarmi?"
    },
    {
      // id: 5,
      guide_id: 1,
      user_id: 1,
      content: "Ko'rib chiqamiz"
    },
  ]);
};