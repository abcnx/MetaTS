import { describe, it, expect } from 'vitest';
import { camelCase, pascalCase, kebabCase, snakeCase, truncate, isBlank, capitalize, reverse, countOccurrences } from '../src/string.js';

describe('camelCase', () => {
  it('converts various formats to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
    expect(camelCase('hello_world')).toBe('helloWorld');
    expect(camelCase('Hello World')).toBe('helloWorld');
    expect(camelCase('hello')).toBe('hello');
  });
});

describe('pascalCase', () => {
  it('converts to PascalCase', () => {
    expect(pascalCase('hello-world')).toBe('HelloWorld');
  });
});

describe('kebabCase', () => {
  it('converts to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('Hello World')).toBe('hello-world');
  });
});

describe('snakeCase', () => {
  it('converts to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
    expect(snakeCase('hello-world')).toBe('hello_world');
  });
});

describe('truncate', () => {
  it('truncates strings longer than maxLength', () => {
    expect(truncate('hello world', 5)).toBe('he...');
  });

  it('does not truncate strings within length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });
});

describe('isBlank', () => {
  it('returns true for blank strings', () => {
    expect(isBlank('')).toBe(true);
    expect(isBlank('   ')).toBe(true);
  });

  it('returns false for non-blank strings', () => {
    expect(isBlank('hello')).toBe(false);
  });
});

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
});

describe('reverse', () => {
  it('reverses a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });
});

describe('countOccurrences', () => {
  it('counts occurrences of a substring', () => {
    expect(countOccurrences('hello hello world', 'hello')).toBe(2);
    expect(countOccurrences('hello', 'x')).toBe(0);
  });
});
