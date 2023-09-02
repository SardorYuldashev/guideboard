const db = require('../../db');
const { hash } = require('bcryptjs');
const { NotFoundError, ForbiddenError } = require('../../shared/errors');

const editUser = async ({ id, user, ...changes }) => {

  const existing = await db('users').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi");
  };

  if (id == user.id) {
    if (changes.role === "admin" || changes.role === "employee") {
      throw new ForbiddenError("Admin o'z rolini o'zgartira olmaydi");
    };
  };

  const changeValues = {};

  if (changes.password) {
    changeValues.password = await hash(changes.password, 10);
  };

  const result = await db('users')
    .where({ id })
    .update({ ...changes, ...changeValues })
    .returning(['*']);

  return result[0];
};

module.exports = editUser;