import { prisma } from '../utils/prisma';
import { AppError } from '../middleware/errorHandler';

export class BranchService {
  async getAllBranches() {
    const branches = await prisma.branch.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });

    return branches;
  }

  async getBranch(id: string) {
    const branch = await prisma.branch.findUnique({
      where: { id }
    });

    if (!branch) {
      throw new AppError(404, 'Branch not found');
    }

    return branch;
  }
}
