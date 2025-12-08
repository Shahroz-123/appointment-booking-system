import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

describe('HomePage', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Welcome to Appointment Booking/i)).toBeInTheDocument();
  });

  it('renders Book Appointment button', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('link', { name: /Book Appointment/i })).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Easy Scheduling/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time Availability/i)).toBeInTheDocument();
    expect(screen.getByText(/Multiple Locations/i)).toBeInTheDocument();
  });
});
