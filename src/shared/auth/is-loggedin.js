const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { UnauthorizedError } = require('../errors');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isLoggedIn = (req, res, next) => {
  try {
    const key = req.headers.authorization.split(' ');

    if(key[0] !== "Bearer") {
      throw new UnauthorizedError("Xato token")
    };

    const token = key[1];

    if (!token) {
      throw new UnauthorizedError('Avtorizatsiya qilmagansiz');
    };

    const decoded = jwt.verify(token, config.jwt.secret, { ignoreExpiration: false });

    req.user = decoded.user;

    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  };
};

module.exports = isLoggedIn;