const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addGuide = require('./add-guide');
const listGuides = require('./list-guides');
const showGuide = require('./show-guide');
const editGuide = require('./edit-guide');
const removeGuide = require('./remove-guide');
const {
  postGuideSchema,
  getGuidesSchema,
  showGuideSchema,
  patchGuideSchema,
  deleteGuideSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postGuide = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postGuideSchema);

    const data = await addGuide(req.body);

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
const getGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getGuidesSchema)

    const data = await listGuides({ ...req.query });

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
const getGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showGuideSchema);

    const data = await showGuide(req.params);

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
const patchGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchGuideSchema);

    const data = await editGuide({ id: req.params.id, ...req.body });

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
const deleteGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteGuideSchema);

    const data = await removeGuide(req.params);

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postGuide,
  getGuides,
  getGuide,
  patchGuide,
  deleteGuide,
};