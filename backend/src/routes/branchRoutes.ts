import { Router } from 'express';
import { getAllBranches, getBranch } from '../controllers/branchController';

const router = Router();

router.get('/', getAllBranches);
router.get('/:id', getBranch);

export default router;
