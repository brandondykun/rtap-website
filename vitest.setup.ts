import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach, vi } from 'vitest';

afterEach(() => cleanup());

const NEXT_ONLY_PROPS = ['priority', 'fill', 'placeholder', 'blurDataURL', 'quality'];

// next/image needs the Next runtime; in tests it is a plain <img>.
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: Record<string, unknown>) => {
    const rest = Object.fromEntries(Object.entries(props).filter(([k]) => !NEXT_ONLY_PROPS.includes(k)));
    return createElement('img', { src: typeof src === 'string' ? src : (src as { src: string }).src, alt, ...rest });
  },
}));
