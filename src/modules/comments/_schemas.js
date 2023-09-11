const Joi = require('joi');

exports.postCommentSchema = {
  body: Joi.object({
    guide_id: Joi.number().integer().required(),
    content: Joi.string().required().min(1),
  }),
};

exports.listCommentsSchema = {
  params: Joi.object({
    guide_id: Joi.number(),
  }),
};

exports.showCommentSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

exports.editCommentSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
  body: Joi.object({
    content: Joi.string().required().min(1),
  }),
};

exports.deleteCommentSchema = {
  params: Joi.object({
    id: Joi.number(),
  }),
};