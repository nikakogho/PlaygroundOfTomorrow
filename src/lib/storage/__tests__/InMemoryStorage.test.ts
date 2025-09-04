import { describe, it, expect } from 'vitest';
import { InMemoryStorage } from '../InMemoryStorage';

describe('InMemoryStorage', () => {
  it('set/get/remove works', () => {
    const mem = new InMemoryStorage();
    expect(mem.length).toBe(0);

    mem.setItem('k', 'v');
    expect(mem.length).toBe(1);
    expect(mem.getItem('k')).toBe('v');

    mem.removeItem('k');
    expect(mem.getItem('k')).toBeNull();
    expect(mem.length).toBe(0);
  });

  it('key(index) iterates deterministically', () => {
    const mem = new InMemoryStorage();
    mem.setItem('a', '1');
    mem.setItem('b', '2');
    const keys = [mem.key(0), mem.key(1)];
    expect(new Set(keys)).toEqual(new Set(['a', 'b']));
  });
});
