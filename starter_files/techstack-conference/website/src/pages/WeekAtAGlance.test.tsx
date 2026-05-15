import { render, screen } from '@testing-library/react';
import { WeekAtAGlance } from './WeekAtAGlance';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag: string) =>
        ({ children, initial, whileInView, viewport, transition, ...props }: any) => {
          const Component = tag;
          return <Component {...props}>{children}</Component>;
        },
    }
  ),
}));

describe('WeekAtAGlance', () => {
  it('renders all three days', () => {
    render(
      <BrowserRouter>
        <WeekAtAGlance />
      </BrowserRouter>
    );

    expect(screen.getByText('Day 1')).toBeDefined();
    expect(screen.getByText('Day 2')).toBeDefined();
    expect(screen.getByText('Day 3')).toBeDefined();
  });

  it('renders events for Day 1', () => {
    render(
      <BrowserRouter>
        <WeekAtAGlance />
      </BrowserRouter>
    );

    expect(screen.getByText('Registration & Breakfast')).toBeDefined();
    expect(screen.getByText('Opening Keynote: The Future of AI')).toBeDefined();
    expect(screen.getByText('08:00 AM')).toBeDefined();
  });

  it('renders events for Day 2', () => {
    render(
      <BrowserRouter>
        <WeekAtAGlance />
      </BrowserRouter>
    );

    expect(screen.getByText('Morning Keynote: Ethical AI')).toBeDefined();
    expect(screen.getByText('Hands-on Labs')).toBeDefined();
  });

  it('renders events for Day 3', () => {
    render(
      <BrowserRouter>
        <WeekAtAGlance />
      </BrowserRouter>
    );

    expect(screen.getByText('Closing Keynote')).toBeDefined();
    expect(screen.getByText('Hackathon Demos & Awards')).toBeDefined();
  });
});
