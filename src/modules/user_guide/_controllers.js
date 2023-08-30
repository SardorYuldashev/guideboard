const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addUserGuide = require('./add-user-guide');
const listUserGuide = require('./list-user-guide');
const listAllUserGuide = require('./list-all-user-guide');
const showUserGuide = require('./show-user-guide');
const editUserGuide = require('./edit-user-guide');
const completeUserGuide = require('./complete-user-guide');
const removeUserGuide = require('./remove-user-guide');
const {
  postUserGuideSchema,
  getUserGuideSchema,
  showUserGuideSchema,
  patchUserGuideSchema,
  completedUserGuideSchema,
  deleteUserGuideSchema,
  getAllUserGuideSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUserGuide = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserGuideSchema);

    const data = await addUserGuide(req.body);

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
const getUserGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getUserGuideSchema)

    const data = await listUserGuide({ user: req.user, ...req.query });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllUserGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getAllUserGuideSchema)

    const data = await listAllUserGuide({ ...req.query });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserGuideSchema);

    const data = await showUserGuide({ ...req.params, user: req.user });

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
const patchUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserGuideSchema);

    const data = await editUserGuide({ id: req.params.id, ...req.body });

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
const completedUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, completedUserGuideSchema);

    const data = await completeUserGuide({ id: req.params.id, user: req.user, ...req.body });

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
const deleteUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserGuideSchema);

    const data = await removeUserGuide(req.params);

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postUserGuide,
  getUserGuides,
  getAllUserGuides,
  getUserGuide,
  patchUserGuide,
  completedUserGuide,
  deleteUserGuide
};