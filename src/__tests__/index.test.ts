import { greet, version } from '../index';

describe('MetaTS', () => {
  it('should have a version', () => {
    expect(version).toBeDefined();
  });

  it('should greet a person', () => {
    const result = greet('World');
    expect(result).toBe('Hello, World!');
  });
});
