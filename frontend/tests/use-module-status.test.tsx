import { renderHook, act } from '@testing-library/react';
import { useModuleStatus } from '../src/hooks/useModuleStatus';

describe('useModuleStatus', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('initializes from localStorage', () => {
    window.localStorage.setItem('progress/neuro101/neuro101-01', 'true');
    const { result } = renderHook(() => useModuleStatus('neuro101', 'neuro101-01'));
    expect(result.current.isComplete).toBe(true);
  });

  it('marks module as complete and saves to localStorage', () => {
    const { result } = renderHook(() => useModuleStatus('neuro101', 'neuro101-02'));
    act(() => result.current.markComplete());
    expect(window.localStorage.getItem('progress/neuro101/neuro101-02')).toBe('true');
    expect(result.current.isComplete).toBe(true);
  });

  it('reset clears localStorage entry', () => {
    const { result } = renderHook(() => useModuleStatus('neuro101', 'neuro101-03'));
    act(() => result.current.markComplete());
    act(() => result.current.reset());
    expect(window.localStorage.getItem('progress/neuro101/neuro101-03')).toBeNull();
    expect(result.current.isComplete).toBe(false);
  });
});
