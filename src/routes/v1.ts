import * as express from 'express';
import * as HomeController from '../controllers/home';

const router = express.Router();

router.post('/preview', HomeController.preview);

export default router;
