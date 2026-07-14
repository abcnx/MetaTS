import { describe, it, expect } from 'vitest';
import { chunk, unique, uniqueBy, partition, shuffle, groupBy, first, last, range } from '../src/array.js';

describe('chunk', () => {
  it('splits an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('throws for invalid size', () => {
    expect(() => chunk([1, 2], 0)).toThrow();
  });
});

describe('unique', () => {
  it('removes duplicate values', () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });
});

describe('uniqueBy', () => {
  it('removes duplicates by a key function', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(uniqueBy(items, item => item.id)).toEqual([{ id: 1 }, { id: 2 }]);
  });
});

describe('partition', () => {
  it('splits array based on predicate', () => {
    const [even, odd] = partition([1, 2, 3, 4, 5], n => n % 2 === 0);
    expect(even).toEqual([2, 4]);
    expect(odd).toEqual([1, 3, 5]);
  });
});

describe('shuffle', () => {
  it('returns a new array with same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).not.toBe(arr);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('groupBy', () => {
  it('groups elements by key', () => {
    const items = [
      { type: 'fruit', name: 'apple' },
      { type: 'fruit', name: 'banana' },
      { type: 'veg', name: 'carrot' },
    ];
    const grouped = groupBy(items, item => item.type);
    expect(grouped.fruit).toHaveLength(2);
    expect(grouped.veg).toHaveLength(1);
  });
});

describe('first', () => {
  it('returns the first element', () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first([])).toBeUndefined();
  });
});

describe('last', () => {
  it('returns the last element', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([])).toBeUndefined();
  });
});

describe('range', () => {
  it('creates a range of numbers', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(2, 5)).toEqual([2, 3, 4]);
  });
});
