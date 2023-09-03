/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('guides').del()
  await knex('guides').insert([
    {
      // id: 1,
      title: "Ishga o'z vaqtida kelish",
      content: `Ishga kechikmasdan keling. Agar kechikayotgan bo'lsangiz administratorlarni ogohlantiring. Besabab kechikish oyligingiz qiymatiga ta'sir qiladi.`
    },
    {
      // id: 2,
      title: "Kamroq telefondan foydalanish",
      content: "Ish vaqtida telefon o'ynamang. Telefondan faqat kerakli maqsadlarda foydalaning. Telefon sizning ishga bo'lgan e'tiboringizni tushuradi. Bu esa o'z navbatida ishingiz sifatiga ta'sir qilmay qolmaydi."
    },
    {
      // id: 3,
      title: "Oylik maoshni sir saqlash bo'yicha tartib",
      content: "Sizning oylik maoshingiz, kompaniya va siz o'rtangizda qolishi kerak. Bir xil darajadagi hodim bo'lishlariga qaramasdan, ma'lum sabablarga ko'ra shartnomada turli xil moashga kelishilgan bo'lishi mumkin. Moash haqidagi ma'lumotlarni oshkor etish, hodimlar o'rtasida tushunmovchiliklarga olib kelishi mumkin. Bu esa o'z navbatida nosog'lom ish muhitini yaratadi."
    },
    {
      // id: 4,
      title: "Ishxona ichidagi sirlarni tashqariga olib chiqmang",
      content: "Ishxonaning konfidensial ma'lumotlarni tashqariga chiqishi taqiqlanadi. Bu qoidaga amal qilmagan xodimga ko'ra qonuniy chora ko'riladi. Ishxonaning sirlarini tarqatganligi uchun xodim oylik maoshidan ayrilishi, xayfsan olishi, ishdan bo'shatilishi va hattoki jinoiy javobgarlikka tortilishi mumkin."
    },
    {
      // id: 5,
      title: "O'qituvchi va yordamchi o'qituvchilarning dars qoldirish tartibi",
      content: "Agar ma'lum sabablarga ko'ra dars qoldirishga majbur bo'lsangiz, birinchi o'rinda o'rningizga dars o'tib berish uchun o'qituvchi topishingiz kerak. Buni yo'nalishingiz bo'yicha guruhdagi boshqa o'qituvchilardan so'rashingiz mumkin. Bu ishni dars qoldiradigan kundan uch kun oldin qidirishingiz kerak. Agar o'qituvchi topilsa, o'sha kun uchun maosh o'tib o'rningizga o'tib bergan ustozga yoziladi. Agar o'qituvchi topilmasa, unda o'quvchilar bilan kelishib, qoldirilgan darsni boshqa sanaga ko'chirish kerak bo'ladi, va uni ikki hafta ichida o'tib berish kerak. Favqulotda vaziyatlarda, o'qituvchilarni qo'llab quvvatlash bo'yicha hodimga bog'laning."
    },
    {
      // id: 6,
      title: "Ishdan bo'shash tartibi",
      content: "Shartnomaga ko'ra, agar ishdan bo'shamoqchi bo'lsangiz, kadrlar bo'limigia 1 oy oldin yozma ariza bilan murojat qiling. Bir oy davomida tashkilot o'rningizga boshqa hodim topa olishi uchun. Oyligingiz ishdan bo'shagan kuningizdan boshlab, 14 ish kuni davomida to'lab beriladi."
    },
  ]);
};