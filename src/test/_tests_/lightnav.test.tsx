import { render, screen, fireEvent } from '@testing-library/react';
import LightNav from '~/components/light-navbar/LightNav';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('LightNav', () => {
  test('renders desktop logo', () => {
    render(<LightNav />);
    const desktopLogo = screen.getByAltText('desktop-logo');
    expect(desktopLogo).toBeInTheDocument();
  });

  test('renders mobile logo', () => {
    render(<LightNav />);
    const mobileLogo = screen.getByAltText('mobile-logo');
    expect(mobileLogo).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    render(<LightNav />);
    const menuButton = screen.getByAltText('menu-icon');
    fireEvent.click(menuButton);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });

  test('renders Sign In and Sign Up buttons when not signed in', () => {
    render(<LightNav />);
    const signInButton = screen.getByText('Sign In');
    const signUpButton = screen.getByText('Sign Up');
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  test('renders profile icon when signed in', () => {
    // Override the useEffect to simulate the user being signed in
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    jest.spyOn(React, 'useState').mockReturnValueOnce([true, jest.fn()]); 

    render(<LightNav />);
    const profileIcon = screen.getByAltText('profile-icon');
    expect(profileIcon).toBeInTheDocument();
  });
});
