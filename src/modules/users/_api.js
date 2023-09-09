const express = require('express');
const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, postUser, loginUser, getMe, getUser, patchMe, patchUser, deleteUser } = require('./_controllers');

const router = express.Router();

router.post('/users/login', loginUser);
router.post('/users', isLoggedIn, hasRole(['admin']), postUser);
router.get('/users', getUsers);
// router.get('/users', isLoggedIn, hasRole(['admin']), getUsers);
router.get('/users/me', isLoggedIn, getMe);
router.get('/users/:id', isLoggedIn, hasRole(['admin']), getUser);
router.patch('/users/me', isLoggedIn, patchMe);
router.patch('/users/:id', isLoggedIn, hasRole(['admin']), patchUser);
router.delete('/users/:id', isLoggedIn, hasRole(['admin']), deleteUser);

module.exports = router;