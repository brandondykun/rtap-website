import { render, screen } from '@testing-library/react';
import { screenshots } from '@/content/screenshots';
import { PhoneFrame } from './PhoneFrame';

it('PhoneFrame renders the screenshot whole with its alt', () => {
  render(<PhoneFrame shot={screenshots.op} sizes="200px" />);
  expect(screen.getByAltText(screenshots.op.alt)).toBeInTheDocument();
});
