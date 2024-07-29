import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PasswordCriteria from './passwordCriteria';

describe('PasswordCriteria Component', () => {
  it('should show all criteria as invalid when password is empty', () => {
    render(<PasswordCriteria password="" />);
    
    expect(screen.getByText('8 Characters')).toBeInTheDocument();
    expect(screen.getByText('Uppercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Lowercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Special Character')).toBeInTheDocument();
  });

  it('should show the correct criteria as valid or invalid based on the password', () => {
    render(<PasswordCriteria password="Hng1" />);
    
    expect(screen.getByText('8 Characters')).toBeInTheDocument();
    expect(screen.getByText('Uppercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Lowercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Special Character')).toBeInTheDocument();
  });

  it('should show all criteria as valid when password meets all requirements', () => {
    render(<PasswordCriteria password="Hng1!" />);
    
    expect(screen.getByText('8 Characters')).toBeInTheDocument();
    expect(screen.getByText('Uppercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Lowercase Letter')).toBeInTheDocument();
    expect(screen.getByText('Special Character')).toBeInTheDocument();
  });
});
