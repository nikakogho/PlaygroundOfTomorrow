import { describe, it, expect, beforeEach } from 'vitest';
import { LocalStorageAdapter } from '../LocalStorageAdapter';
import { InMemoryStorage } from '../InMemoryStorage';

type Profile = { skin: 'starship' | 'medieval' };

describe('LocalStorageAdapter', () => {
  let store: InMemoryStorage;

  beforeEach(() => {
    store = new InMemoryStorage();
  });

  it('namespaces + versions keys, and (de)serializes JSON', () => {
    const a = new LocalStorageAdapter({ namespace: 'pot', version: 1, store });

    const p: Profile = { skin: 'starship' };
    a.set('profile', p);

    // Physical key stored
    expect(store.getItem('pot/v1/profile')).toBe(JSON.stringify(p));

    // Logical read
    const loaded = a.get<Profile>('profile');
    expect(loaded).toEqual(p);
  });

  it('list() returns logical keys under a prefix', () => {
    const a = new LocalStorageAdapter({ namespace: 'pot', version: 1, store });
    a.set('progress/ep01', { done: true });
    a.set('progress/ep08', { done: false });
    a.set('profile', {});

    const keys = a.list('progress/');
    expect(keys.sort()).toEqual(['progress/ep01', 'progress/ep08']);
  });

  it('remove() deletes only the targeted logical key', () => {
    const a = new LocalStorageAdapter({ namespace: 'pot', version: 1, store });
    a.set('profile', { skin: 'medieval' });
    a.set('progress/ep01', { done: true });

    a.remove('profile');
    expect(a.get('profile')).toBeNull();
    expect(a.get('progress/ep01')).not.toBeNull();
  });

  it('migrate(prevVersion) copies entries if missing in current version', () => {
    // Seed v1 data "manually"
    store.setItem('pot/v1/profile', JSON.stringify({ skin: 'starship' }));

    // New adapter points to v2
    const a = new LocalStorageAdapter({ namespace: 'pot', version: 2, store });
    a.migrate?.(1);

    // Now v2 has the copied key
    expect(store.getItem('pot/v2/profile')).toBe(JSON.stringify({ skin: 'starship' }));
  });

  it('clearNamespace() clears only current namespace/version', () => {
    // Seed across versions
    store.setItem('pot/v1/profile', '{}');
    store.setItem('pot/v2/profile', '{}');

    const v2 = new LocalStorageAdapter({ namespace: 'pot', version: 2, store });
    v2.clearNamespace?.();

    expect(store.getItem('pot/v1/profile')).toBe('{}'); // untouched
    expect(store.getItem('pot/v2/profile')).toBeNull();  // cleared
  });

  it('returns null on unreadable JSON and does not throw', () => {
    // Corrupt the physical value:
    store.setItem('pot/v1/profile', '{not json');
    const a = new LocalStorageAdapter({ namespace: 'pot', version: 1, store });
    expect(a.get('profile')).toBeNull();
  });
});
