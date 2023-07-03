import express from 'express';
import {
  getFeedPosts,
  getUserPosts,
  postComment,
  deleteComment,
  likePost,
  deletePost,
} from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Read
router.get('/', verifyToken, getFeedPosts);
router.get('/userId', verifyToken, getUserPosts);

// Update
router.patch('/:id/like', verifyToken, likePost);
router.post('/:postId/:userId/comment', verifyToken, postComment);
router.patch('/:postId/:userId/comment/delete', verifyToken, deleteComment);

// Delete
router.delete('/:id', verifyToken, deletePost);

export default router;
