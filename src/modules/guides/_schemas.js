const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postGuideSchema = {
  body: Joi.object({
    title: Joi.string().required().min(3),
    content: Joi.string().required().min(3),
    notify: Joi.boolean(),
  }),
};

exports.getGuidesSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["id"]),
  }),
};

exports.showGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

exports.patchGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    title: Joi.string().min(3),
    content: Joi.string().min(3),
    notify: Joi.boolean(),
  }),
};

exports.deleteGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};