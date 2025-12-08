import { AppError } from '../middleware/errorHandler';

describe('AppError', () => {
  it('should create an AppError with correct properties', () => {
    const error = new AppError(404, 'Not found');
    
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe('Not found');
    expect(error.isOperational).toBe(true);
  });

  it('should set isOperational to false when specified', () => {
    const error = new AppError(500, 'Server error', false);
    
    expect(error.isOperational).toBe(false);
  });
});
