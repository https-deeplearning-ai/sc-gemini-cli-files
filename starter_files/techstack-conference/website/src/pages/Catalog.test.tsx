import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, useSearchParams } from 'react-router-dom';
import { Catalog } from './Catalog';

const { mockSessions } = vi.hoisted(() => {
  return {
    mockSessions: [
      {
        id: '1',
        title: 'React Keynote',
        description: 'Deep dive into React',
        speaker: 'Dr. Sarah Chen',
        category: 'Keynote',
        day: 'Day 1',
        time: '10:00 AM',
        location: 'Hall A',
        details: {
          fullDescription: 'Full React Keynote',
          takeaways: ['A', 'B'],
          tracks: ['Frontend'],
          level: 'Beginner'
        }
      },
      {
        id: '2',
        title: 'Vue Workshop',
        description: 'Hands-on with Vue',
        speaker: 'Marcus Rodriguez',
        category: 'Learning Lab',
        day: 'Day 2',
        time: '2:00 PM',
        location: 'Room 200',
        details: {
          fullDescription: 'Full Vue Workshop',
          takeaways: ['C', 'D'],
          tracks: ['Frontend'],
          level: 'Advanced'
        }
      },
      {
        id: '3',
        title: 'AI in 2026',
        description: 'Future of AI',
        speaker: 'Emily Watson',
        category: 'Breakout',
        day: 'Day 1',
        time: '11:00 AM',
        location: 'Hall B',
        details: {
          fullDescription: 'Full AI talk',
          takeaways: ['E', 'F'],
          tracks: ['AI'],
          level: 'Intermediate'
        }
      }
    ]
  };
});

vi.mock('../data/sessions', () => ({
  SESSIONS: mockSessions
}));

describe('Catalog Page', () => {
  it('renders all sessions initially', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('filters by search query (title)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });

  it('filters by search query (speaker)', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'Marcus' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by Day', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const daySelect = screen.getByDisplayValue('All Days');
    fireEvent.change(daySelect, { target: { value: 'Day 2' } });

    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });

  it('filters by Category', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const categorySelect = screen.getByDisplayValue('All Categories');
    fireEvent.change(categorySelect, { target: { value: 'Keynote' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('filters by Level', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const levelSelect = screen.getByDisplayValue('All Levels');
    fireEvent.change(levelSelect, { target: { value: 'Advanced' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Track', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const trackSelect = screen.getByDisplayValue('All Tracks');
    fireEvent.change(trackSelect, { target: { value: 'AI' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('shows no results message when no matches', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'NonExistentTerm' } });

    expect(screen.getByText('No sessions found')).toBeInTheDocument();
    expect(screen.getByText('Showing 0 sessions')).toBeInTheDocument();
  });
});
