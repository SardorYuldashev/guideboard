const express = require('express');
const { isLoggedIn } = require('../../shared/auth');
const { postComment, getComments, getComment, patchComment, deleteComment } = require('./_controllers');

const router = express.Router();

router.post('/comments', isLoggedIn, postComment);
router.get('/comments/guide/:guide_id', isLoggedIn, getComments);
router.get('/comments/:id', isLoggedIn, getComment);
router.patch('/comments/:id', isLoggedIn, patchComment);
router.delete('/comments/:id', isLoggedIn, deleteComment);

module.exports = router;