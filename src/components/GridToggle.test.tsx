import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screenshots } from '@/content/screenshots';
import { GridToggle } from './GridToggle';

it('starts with the grid on and shows the gridded screenshot', () => {
  render(<GridToggle />);
  expect(screen.getByRole('switch', { name: /mgrs grid/i })).toHaveAttribute('aria-checked', 'true');
  expect(screen.getByAltText(screenshots.landscapeGrid.alt)).toBeVisible();
  expect(screen.queryByAltText(screenshots.gridOff.alt)).toBeNull();
});

it('turns the grid off and back on', async () => {
  render(<GridToggle />);
  const sw = screen.getByRole('switch', { name: /mgrs grid/i });
  await userEvent.click(sw);
  expect(sw).toHaveAttribute('aria-checked', 'false');
  expect(screen.getByAltText(screenshots.gridOff.alt)).toBeInTheDocument();
  expect(screen.queryByAltText(screenshots.landscapeGrid.alt)).toBeNull();
  await userEvent.click(sw);
  expect(sw).toHaveAttribute('aria-checked', 'true');
});
