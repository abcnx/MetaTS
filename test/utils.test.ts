import { describe, it, expect } from 'vitest';
import { isNil, isPresent, isObject, isString, isNumber, isBoolean, isFunction, isPlainObject, isEmpty, clamp, randomInt, debounce, throttle } from '../src/utils.js';

describe('isNil', () => {
  it('returns true for null and undefined', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it('returns false for other values', () => {
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil({})).toBe(false);
  });
});

describe('isPresent', () => {
  it('returns false for null and undefined', () => {
    expect(isPresent(null)).toBe(false);
    expect(isPresent(undefined)).toBe(false);
  });

  it('returns true for other values', () => {
    expect(isPresent(0)).toBe(true);
    expect(isPresent('')).toBe(true);
    expect(isPresent(false)).toBe(true);
  });
});

describe('isObject', () => {
  it('returns true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  it('returns false for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(42)).toBe(false);
  });
});

describe('isString', () => {
  it('returns true for strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });

  it('returns false for non-strings', () => {
    expect(isString(42)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString({})).toBe(false);
  });
});

describe('isNumber', () => {
  it('returns true for numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
  });

  it('returns false for NaN and non-numbers', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('42')).toBe(false);
    expect(isNumber(null)).toBe(false);
  });
});

describe('isBoolean', () => {
  it('returns true for booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('returns false for non-booleans', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });
});

describe('isFunction', () => {
  it('returns true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
  });

  it('returns false for non-functions', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction(42)).toBe(false);
  });
});

describe('isPlainObject', () => {
  it('returns true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
  });

  it('returns false for non-plain objects', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
  });
});

describe('isEmpty', () => {
  it('returns true for empty values', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('returns false for non-empty values', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty('a')).toBe(false);
  });
});

describe('clamp', () => {
  it('clamps values within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});

describe('randomInt', () => {
  it('returns a number within the specified range', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1, 6);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
    }
  });
});

describe('debounce', () => {
  it('delays function execution', async () => {
    let callCount = 0;
    const fn = debounce(() => { callCount++; }, 50);
    fn();
    fn();
    fn();
    expect(callCount).toBe(0);
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(callCount).toBe(1);
  });
});

describe('throttle', () => {
  it('limits function execution rate', async () => {
    let callCount = 0;
    const fn = throttle(() => { callCount++; }, 100);
    fn();
    fn();
    fn();
    expect(callCount).toBe(1);
    await new Promise(resolve => setTimeout(resolve, 150));
    fn();
    expect(callCount).toBe(2);
  });
});
