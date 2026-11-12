import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach, vi } from 'vitest';

afterEach(() => cleanup());

// next/image needs the Next runtime; in tests it is a plain <img>.
vi.mock('next/image', () => ({
  default: ({ src, alt, priority: _p, fill: _f, placeholder: _ph, blurDataURL: _b, ...rest }: Record<string, unknown>) =>
    createElement('img', { src: typeof src === 'string' ? src : (src as { src: string }).src, alt, ...rest }),
}));
