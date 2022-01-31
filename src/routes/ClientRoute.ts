import { Router } from 'express'
import { getAllClientsController } from '../controller'
const router = Router();

router.get('/', getAllClientsController);

export default router;