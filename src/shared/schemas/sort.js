const Joi = require("joi");

module.exports = (sortFields) => Joi.object({
  by: Joi.string().valid(...sortFields),
  order: Joi.string().valid("asc", "desc"),
});