import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Sidebar from './sideBar';
import progress from '../../../public/userSidebarNav/progress.png';
import learningRoom from '../../../public/userSidebarNav/learningRoom.png';
import achievements from '../../../public/userSidebarNav/achievements.png';
import leaderboards from '../../../public/userSidebarNav/leaderboard.png';
import challenges from '../../../public/userSidebarNav/challenges.png';
import logout from '../../../public/userSidebarNav/logout.png';

// Mock Next.js's usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockUsePathname = usePathname as jest.Mock;

const sideItems = [
  {
    route: 'Learning Room',
    link: '/learningRoom',
    icon: learningRoom,
    id: 'Learning',
  },
  {
    route: 'Progress Tracking',
    link: '/progress',
    icon: progress,
    id: 'Progress',
  },
  {
    route: 'Achievements',
    link: '/achievements',
    icon: achievements,
    id: 'Achievements',
  },
  {
    route: 'Leaderboards',
    link: '/leaderboard',
    icon: leaderboards,
    id: 'Leaderboards',
  },
  {
    route: 'Challenges',
    link: '/challenges',
    icon: challenges,
    id: 'Challenges',
  },
];

describe('Sidebar Component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/some/path');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render sidebar links based on sideNavitems', () => {
    render(<Sidebar sideNavitems={sideItems} />);

    // Check if the links are rendered correctly
    sideItems.forEach((item) => {
      const linkElement = screen.getByTestId(item.id);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.link);
      expect(screen.getByAltText(`${item.route} icon`)).toBeInTheDocument();
    });
  });

  it('should apply correct styling based on the currentPathName', () => {
    // Mock the path to match one of the sidebar item ids
    mockUsePathname.mockReturnValue('/learningRoom');
    
    render(<Sidebar sideNavitems={sideItems} />);

    // Check if the currentPathName item has the active class
    const activeLink = screen.getByTestId('Learning');
    expect(activeLink).toHaveClass('bg-Primary/90');
    expect(activeLink).toHaveClass('text-white');
    
    // Ensure other links do not have active class
    sideItems.forEach((item) => {
      if (item.id !== 'Learning') {
        const link = screen.getByTestId(item.id);
        expect(link).not.toHaveClass('bg-Primary/90');
        expect(link).not.toHaveClass('text-white');
      }
    });
  });

  it('should update clickedLink state when a link is clicked', () => {
    render(<Sidebar sideNavitems={sideItems} />);

    // Click on a link and check if clickedLink state updates
    const linkToClick = screen.getByTestId('Progress');
    fireEvent.click(linkToClick);

    // Check if the clicked link has the clickedLink class
    expect(linkToClick).toHaveClass('bg-[#FE8B4C]');
    expect(linkToClick).toHaveClass('text-white');
    
    // Ensure other links do not have clickedLink class
    sideItems.forEach((item) => {
      if (item.id !== 'Progress') {
        const link = screen.getByTestId(item.id);
        expect(link).not.toHaveClass('bg-[#FE8B4C]');
        expect(link).not.toHaveClass('text-white');
      }
    });
  });

  it('should render the Sign Out section', () => {
    render(<Sidebar sideNavitems={sideItems} />);

    // Check if the Sign Out section is rendered
    const signOutElement = screen.getByText('Sign Out');
    expect(signOutElement).toBeInTheDocument();
    expect(screen.getByAltText('Sign Out icon')).toBeInTheDocument(); // Adjust this if you add an alt text to the Sign Out icon
  });
});
