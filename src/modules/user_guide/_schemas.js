const Joi = require('joi');
const { offsetPaginaionSchema } = require('../../shared/schemas');

exports.postUserGuideSchema = {
  body: Joi.object({
    guide_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
  }),
};

exports.getUserGuideSchema = {
  query: Joi.object({
    page: offsetPaginaionSchema,
    filters: Joi.object({
      completed: Joi.boolean(),
    }),
  }),
};

exports.getAllUserGuideSchema = {
  query: Joi.object({
    page: offsetPaginaionSchema,
    filters: Joi.object({
      completed: Joi.boolean(),
      guide_id: Joi.number().integer(),
      user_id: Joi.number().integer(),
    }),
  }),
};

exports.showUserGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

exports.patchUserGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    guide_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    completed: Joi.boolean(),
  }),
};

exports.completedUserGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    completed: Joi.boolean(),
  }),
};

exports.deleteUserGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};