/**
 * Array utility functions.
 *
 * @module array
 */

/**
 * Chunks an array into smaller arrays of the specified size.
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Size must be greater than 0');
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Returns the unique elements of an array.
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Returns the unique elements of an array by a given key function.
 */
export function uniqueBy<T, K>(array: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];
  for (const item of array) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

/**
 * Partitions an array into two arrays based on a predicate.
 * The first array contains elements that satisfy the predicate,
 * the second contains elements that do not.
 */
export function partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of array) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }
  return [pass, fail];
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new array; does not mutate the original.
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Groups elements of an array by a key returned by the key function.
 */
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K,
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of array) {
    const key = keyFn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }
  return result;
}

/**
 * Returns the first element of an array, or `undefined` if empty.
 */
export function first<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * Returns the last element of an array, or `undefined` if empty.
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * Returns a new array with elements from `start` to `end` (exclusive).
 * If only one argument is provided, it is treated as the end value with start = 0.
 */
export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}
