const express = require('express');
const httpValidator = require('../../shared/http-validator');
const listUsers = require('./list-users');
const addUser = require('./add-user');
const login = require('./login-user');
const showMe = require('./show-me');
const showUser = require('./show-user');
const editMe = require('./edit-me');
const editUser = require('./edit-user');
const removeUser = require('./remove-user');
const {
  postUserSchema,
  loginUserSchema,
  getUsersSchema,
  showUserSchema,
  patchMeSchema,
  patchUserSchema,
  deleteUserSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSchema);

    const data = await addUser(req.body);

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
const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginUserSchema);

    const data = await login(req.body);

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
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getUsersSchema)

    const data = await listUsers({ ...req.query });

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
const getMe = async (req, res, next) => {
  try {
    const data = await showMe(req.user);

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
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const data = await showUser(req.params);

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
const patchMe = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);

    const data = await editMe({ id: req.user.id, ...req.body });

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
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserSchema);

    const data = await editUser({ id: req.params.id, ...req.body });

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
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema);

    const data = await removeUser(req.params, req.user);

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getUsers,
  postUser,
  loginUser,
  getMe,
  getUser,
  patchMe,
  patchUser,
  deleteUser
};