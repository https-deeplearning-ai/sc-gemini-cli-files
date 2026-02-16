import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
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
          fullDescription: 'Detailed React info',
          level: 'Advanced',
          tracks: ['Frontend', 'Web']
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
          fullDescription: 'Detailed Vue info',
          level: 'Beginner',
          tracks: ['Frontend']
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
          fullDescription: 'Detailed AI info',
          level: 'Intermediate',
          tracks: ['AI/ML']
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

  it('filters by search query', async () => {
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
  });

  it('filters by Level', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const levelSelect = screen.getByDisplayValue('All Levels');
    fireEvent.change(levelSelect, { target: { value: 'Advanced' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('filters by Track', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const trackSelect = screen.getByDisplayValue('All Tracks');
    fireEvent.change(trackSelect, { target: { value: 'AI/ML' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Speaker', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const speakerSelect = screen.getByDisplayValue('All Speakers');
    fireEvent.change(speakerSelect, { target: { value: 'Emily Watson' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('clears all filters', async () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();

    const clearButton = screen.getByText('Clear all filters');
    fireEvent.click(clearButton);

    expect(screen.getByText('Showing 3 sessions')).toBeInTheDocument();
  });

  it('initializes filters from URL parameters', () => {
    render(
      <MemoryRouter initialEntries={['/catalog?level=Advanced&category=Keynote']}>
        <Catalog />
      </MemoryRouter>
    );
    
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    expect(screen.getByText('Showing 1 sessions')).toBeInTheDocument();
  });
});

