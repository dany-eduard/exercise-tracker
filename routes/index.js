import { Router } from 'express';
import { createUser, listUsers } from '../controllers/user.js';
const router = Router();

router.get('/users', listUsers);
router.post('/users', createUser);

export default router;
