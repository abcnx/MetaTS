import { describe, it, expect } from 'vitest';
import { hasOwn, deepClone, deepMerge, pick, omit, mapKeys, mapValues, invert } from '../src/object.js';

describe('hasOwn', () => {
  it('checks own property', () => {
    expect(hasOwn({ a: 1 }, 'a')).toBe(true);
    expect(hasOwn({ a: 1 }, 'b')).toBe(false);
    expect(hasOwn({ a: 1 }, 'toString')).toBe(false);
  });
});

describe('deepClone', () => {
  it('creates a deep clone', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });
});

describe('deepMerge', () => {
  it('deeply merges objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });
});

describe('pick', () => {
  it('picks specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});

describe('omit', () => {
  it('omits specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });
});

describe('mapKeys', () => {
  it('transforms keys', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, key => key.toUpperCase());
    expect(result).toEqual({ A: 1, B: 2 });
  });
});

describe('mapValues', () => {
  it('transforms values', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, val => val * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });
});

describe('invert', () => {
  it('swaps keys and values', () => {
    const obj = { a: 'x', b: 'y' };
    expect(invert(obj)).toEqual({ x: 'a', y: 'b' });
  });
});
