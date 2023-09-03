const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required().min(3),
    last_name: Joi.string().required().min(3),
    age: Joi.number().integer().required(),
    role: Joi.string().valid('employee', 'admin').required(),
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(4),
  }),
};

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(4),
  }),
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["age", "id"]),
    filters: Joi.object({
      role: Joi.string().valid('employee', 'admin'),
    }),
  }),
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

exports.patchMeSchema = {
  body: Joi.object({
    first_name: Joi.string().min(3),
    last_name: Joi.string().min(3),
    age: Joi.number().integer(),
    username: Joi.string().min(3),
  }),
};

exports.patchUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    first_name: Joi.string().min(3),
    last_name: Joi.string().min(3),
    age: Joi.number().integer(),
    role: Joi.string().valid('employee', 'admin'),
    username: Joi.string().min(3),
    password: Joi.string().min(4),
  }),
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};