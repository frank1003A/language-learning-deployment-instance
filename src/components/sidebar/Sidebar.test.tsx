import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Sidebar from './sideBar';
import { usePathname } from 'next/navigation';
import progress from '../../../public/userSidebarNav/progress.png';
import learningRoom from '../../../public/userSidebarNav/learningRoom.png';
import achievements from '../../../public/userSidebarNav/achievements.png';
import leaderboards from '../../../public/userSidebarNav/leaderboard.png';
import challenges from '../../../public/userSidebarNav/challenges.png';
import logout from '../../../public/userSidebarNav/logout.png';

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

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
  it('should render sidebar links based on sideNavitems', () => {
    // Set the mock return value for usePathname
    (usePathname as unknown as jest.Mock).mockReturnValue('/some/path');

    // Render the Sidebar component
    render(<Sidebar sideNavitems={sideItems} currenPathName="/some/path" />);

    // Check if all sidebar items are rendered
    sideItems.forEach((item) => {
      expect(screen.getByTestId(item.id)).toBeInTheDocument();
      expect(screen.getByAltText(`${item.route} icon`)).toBeInTheDocument();
    });
  });
});
