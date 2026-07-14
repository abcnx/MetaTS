/**
 * Object utility functions.
 *
 * @module object
 */

/**
 * Returns `true` if the object has the specified key as an own property.
 */
export function hasOwn<T extends object>(obj: T, key: PropertyKey): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Deeply clones a value using structured cloning.
 * Falls back to JSON round-trip if structuredClone is not available.
 */
export function deepClone<T>(value: T): T {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

/**
 * Deeply merges two or more objects into the target.
 * Later sources overwrite earlier ones for non-object values.
 * Arrays are replaced, not merged.
 */
export function deepMerge<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target } as Record<string, unknown>;

  for (const source of sources) {
    if (!source) continue;
    for (const key of Object.keys(source)) {
      const srcVal = source[key as keyof typeof source];
      const tgtVal = result[key];

      if (
        srcVal !== null &&
        typeof srcVal === 'object' &&
        !Array.isArray(srcVal) &&
        tgtVal !== null &&
        typeof tgtVal === 'object' &&
        !Array.isArray(tgtVal)
      ) {
        result[key] = deepMerge(tgtVal as Record<string, unknown>, srcVal as Record<string, unknown>);
      } else {
        result[key] = srcVal;
      }
    }
  }

  return result as T;
}

/**
 * Picks the specified keys from an object and returns a new object.
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}

/**
 * Omits the specified keys from an object and returns a new object.
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const keySet = new Set(keys);
  const result = {} as Omit<T, K>;
  for (const key of Object.keys(obj)) {
    if (!keySet.has(key as unknown as K)) {
      (result as Record<string, unknown>)[key] = obj[key];
    }
  }
  return result;
}

/**
 * Maps over the keys of an object to produce a new object.
 */
export function mapKeys<T extends Record<string, unknown>>(
  obj: T,
  fn: (key: string, value: T[keyof T]) => string,
): Record<string, T[keyof T]> {
  const result: Record<string, T[keyof T]> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[fn(key, value as T[keyof T])] = value as T[keyof T];
  }
  return result;
}

/**
 * Maps over the values of an object to produce a new object.
 */
export function mapValues<T extends Record<string, unknown>, R>(
  obj: T,
  fn: (value: T[keyof T], key: string) => R,
): Record<string, R> {
  const result: Record<string, R> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = fn(value as T[keyof T], key);
  }
  return result;
}

/**
 * Returns a new object with the keys and values swapped.
 */
export function invert<T extends Record<string, string | number | symbol>>(
  obj: T,
): Record<string, keyof T> {
  const result = {} as Record<string, keyof T>;
  for (const [key, value] of Object.entries(obj)) {
    result[String(value)] = key;
  }
  return result;
}
