const express = require('express');
const { isLoggedIn, hasRole } = require('../../shared/auth');
const { postUserGuide, getUserGuides, getAllUserGuides, getUserGuide, patchUserGuide, completedUserGuide, deleteUserGuide } = require('./_controllers');

const router = express.Router();

router.post('/user-guides', isLoggedIn, hasRole(['admin']), postUserGuide);
router.get('/user-guides', isLoggedIn, getUserGuides);
router.get('/user-guides/all', isLoggedIn, hasRole(['admin']), getAllUserGuides);
router.get('/user-guides/:id', isLoggedIn, getUserGuide);
router.post('/user-guides/:id/read', isLoggedIn, completedUserGuide);
router.patch('/user-guides/:id', isLoggedIn, hasRole(['admin']), patchUserGuide);
router.delete('/user-guides/:id', isLoggedIn, hasRole(['admin']), deleteUserGuide);

module.exports = router;