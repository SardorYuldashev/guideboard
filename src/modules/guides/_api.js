const express = require('express');
const { isLoggedIn, hasRole } = require('../../shared/auth');
const { postGuide, getGuides, getGuide, patchGuide, deleteGuide } = require('./_controllers');

const router = express.Router();

router.post('/guides', isLoggedIn, hasRole(['admin']), postGuide);
router.get('/guides', isLoggedIn, getGuides);
router.get('/guides/:id', isLoggedIn, getGuide);
router.patch('/guides/:id', isLoggedIn, hasRole(['admin']), patchGuide);
router.delete('/guides/:id', isLoggedIn, hasRole(['admin']), deleteGuide);

module.exports = router;