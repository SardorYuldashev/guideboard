const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const addUserGuide = async (data) => {
  const existingGuide = await db('guides')
    .where({ id: data.guide_id })
    .select()
    .first();

  if (!existingGuide) {
    throw new NotFoundError("Qo'llanma topilmadi");
  };

  const usersList = await db("users")
    .select("id");

  data.user_ids.forEach(id => {
    const user = usersList.find(user => user.id === id);

    if (!user) {
      throw new NotFoundError(`Mavjud bo'lmagan ID kiritilgan`);
    };
  });

  data.user_ids.forEach(async id => {
    await db("user_guide")
      .insert({ guide_id: data.guide_id, user_id: id });
  });

  return { message: "Foydalanuchilarga vazifalar jo'natildi" };
};

module.exports = addUserGuide;