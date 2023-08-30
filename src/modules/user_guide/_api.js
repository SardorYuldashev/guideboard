const express = require('express');
const { isLoggedIn, hasRole } = require('../../shared/auth');
const { postUserGuide, getUserGuides, getAllUserGuides, getUserGuide, patchUserGuide, completedUserGuide, deleteUserGuide } = require('./_controllers');

const router = express.Router();

router.post('/userguide', isLoggedIn, hasRole(['admin']), postUserGuide);
router.get('/userguide', isLoggedIn, getUserGuides);
router.get('/userguide/all', isLoggedIn, hasRole(['admin']), getAllUserGuides);
router.get('/userguide/:id', isLoggedIn, getUserGuide);
router.put('/userguide/:id', isLoggedIn, hasRole(['admin']), patchUserGuide);
router.patch('/userguide/:id', isLoggedIn, completedUserGuide);
router.delete('/userguide/:id', isLoggedIn, hasRole(['admin']), deleteUserGuide);

module.exports = router;