import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PasswordCriteria from "./passwordCriteria";

describe('PasswordCriteria Component', () => {
    it('should show all criteria as invalid when password is empty', () => {
      render(<PasswordCriteria password="" />);
      expect(screen.getByText(/8 Characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Uppercase Letter/i)).toBeInTheDocument();
      expect(screen.getByText(/Lowercase Letter/i)).toBeInTheDocument();
      expect(screen.getByText(/Special Character/i)).toBeInTheDocument();
    });
  });
  