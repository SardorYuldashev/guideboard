const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
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
    title: Joi.string(),
    content: Joi.string(),
    notify: Joi.boolean(),
  }),
};

exports.deleteGuideSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};