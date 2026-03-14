import { expect, it, test } from 'vitest';
import { sum, toUpperCase } from './example';

// Test cases

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it('toUpperCase', () => {
    const result = toUpperCase('foobar');
    expect(result).toMatchSnapshot();
});
