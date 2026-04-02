import { Router } from 'express';
import { getRandomJoke, getJokesByCategory, submitJoke } from '../controllers/jokeController';

const router = Router();

router.get('/random', getRandomJoke);
router.get('/category/:category', getJokesByCategory);
router.post('/submit', submitJoke);

export default router;