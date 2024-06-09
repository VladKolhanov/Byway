import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Themes } from '@/utils/constants';
import { renderWithProviders } from '@/utils/helpers/renderWithProviders';

import { ThemeToggle } from './ThemeToggle';

const changeThemeMock = jest.fn();

const mockUseTheme = jest.fn(() => ({
  theme: Themes.LIGHT,
  changeTheme: jest.fn(() => changeThemeMock()),
}));

jest.mock('@/utils/hooks', () => ({ useTheme: jest.fn(() => mockUseTheme()) }));

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should renders the button with correct attributes', () => {
    renderWithProviders(<ThemeToggle />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'theme-toggle');
    expect(button).toHaveAttribute('aria-label', Themes.LIGHT);
  });

  test('Should handles button click', async () => {
    renderWithProviders(<ThemeToggle />);

    const user = userEvent.setup();

    const button = screen.getByRole('button');

    await user.click(button);

    expect(changeThemeMock).toHaveBeenCalledTimes(1);
  });
});
