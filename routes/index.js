import { Router } from 'express';
import { createUser, listUsers } from '../controllers/user.js';
import { saveExercise } from '../controllers/exercises.js';
const router = Router();

router.get('/users', listUsers);
router.post('/users', createUser);
router.post('/api/users/:_id/exercises', saveExercise);

export default router;
