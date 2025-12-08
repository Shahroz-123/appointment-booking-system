import { Request, Response, NextFunction } from 'express';
import { BranchService } from '../services/branchService';

const branchService = new BranchService();

export const getAllBranches = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const branches = await branchService.getAllBranches();
    res.json(branches);
  } catch (error) {
    next(error);
  }
};

export const getBranch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const branch = await branchService.getBranch(req.params.id);
    res.json(branch);
  } catch (error) {
    next(error);
  }
};
