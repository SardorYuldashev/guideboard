const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addComment = require('./add-comment');
const listUsers = require('./list-comments');
const editComment = require('./edit-comment');
const removeComment = require('./remove-comment');
const {
  postCommentSchema,
  listCommentsSchema,
  showCommentSchema,
  editCommentSchema,
  deleteCommentSchema
} = require('./_schemas');
const showComment = require('./show-comment');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postComment = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCommentSchema);

    const data = await addComment({ body: req.body, user: req.user });

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getComments = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, listCommentsSchema);

    const data = await listUsers({ guide_id: req.params.guide_id });

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getComment = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showCommentSchema);

    const data = await showComment({ id: req.params.id });

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchComment = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, editCommentSchema);

    const data = await editComment({ id: req.params.id, user: req.user, ...req.body });

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteComment = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCommentSchema);

    const data = await removeComment({ id: req.params.id, user: req.user });

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postComment,
  getComments,
  getComment,
  patchComment,
  deleteComment,
};