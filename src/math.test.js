import { expect, it } from 'vitest';
import { add } from './math';

it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    expect(result).toBe(expectedResult);
});
