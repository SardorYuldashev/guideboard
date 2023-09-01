/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('guides').del()
  await knex('guides').insert([
    {
      // id: 1,
      title: "Ishga o'z vaqtida kelish",
      content: `Ishga kechikmasdan keling. Agar kechikayotgan bo'lsangiz administratorlarni ogohlantiring. Besabab kechikish oyligingiz qiymatiga ta'sir qiladi.`
    },
    {
      // id: 2,
      title: "Kamroq telefon o'ynash",
      content: "Ish vaqtida telefon o'ynamang. Telefondan faqat kerakli maqsadlarda foydalaning."
    },
    {
      // id: 3,
      title: "Oylikni sir saqlash",
      content: "Oylik maoshingiz qiymatini boshqalarga aytmang. Hamkasblaringiz oylik maoshi turli sabablarga ko'ra sizning oylik maoshingizdan farq qilishi mumkin."
    },
    {
      // id: 3,
      title: "Ishxona ichidagi sirlarni tashqariga olib chiqmang",
      content: "Ishxonada konfidensial ma'lumotlarni tashqariga chiqishi yaxshi oqibatlarga olib kelmaydi"
    },
  ]);
};
