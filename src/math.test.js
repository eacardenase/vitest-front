import { expect, it } from 'vitest';
import { add } from './math';

it('Should summarize all number values in an array', () => {
    // Arrange
    const input = [1, 2];

    // Act
    const result = add(input);

    // Assert
    const expectedResult = input.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
    // Arrange
    const input = [1, 'invalid'];

    // Act
    const result = add(input);

    // Assert
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const input = ['1', '2'];

    const result = add(input);

    const expectedResult = input.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr);
    }, 0);

    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const input = [];

    const result = add(input);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow(/is not iterable/);
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
});
