import { describe, it, expect } from 'vitest';
import { storageKeys } from '../keys';

describe('storageKeys', () => {
  it('progress key helper lowercases slug and prefixes path', () => {
    expect(storageKeys.progress('EP01')).toBe('progress/ep01');
    expect(storageKeys.progress('rockets-dv')).toBe('progress/rockets-dv');
  });

  it('basic keys are plain logical names', () => {
    expect(storageKeys.profile).toBe('profile');
    expect(storageKeys.mastery).toBe('mastery');
    expect(storageKeys.portfolio).toBe('portfolio');
  });
});
