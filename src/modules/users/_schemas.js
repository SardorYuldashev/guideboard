const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    age: Joi.number().integer().required(),
    role: Joi.string().valid('employee', 'admin').required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
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
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number().integer(),
    username: Joi.string(),
  }),
};

exports.patchUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number().integer(),
    role: Joi.string().valid('employee', 'admin'),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};