import { getPosts, createPosts } from '../controllers/controllers';
import { Router } from 'express';

const router = Router();

router.get('/posts', getPosts)

router.post('/posts', createPosts)


export default router;