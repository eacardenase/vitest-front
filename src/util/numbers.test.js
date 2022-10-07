import { it, expect, describe } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
    it('should transform a string number into a number of type number', () => {
        const input = '1';

        const result = transformToNumber(input);

        expect(result).not.toBeNaN();
    });

    it('should yield NaN for non-transformable values', () => {
        const input = 'invalid';
        const input2 = {};

        const result = transformToNumber(input);
        const result2 = transformToNumber(input2);

        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(numberValues);

        const expectedResult = numberValues.map((number) => parseInt(number));
        expect(cleanedNumbers).toEqual(expectedResult);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const input = ['1', ''];

        const resultFn = () => {
            cleanNumbers(input);
        };

        expect(resultFn).toThrow();
    });

    it('should throw an error if an array with at least one element that cannot be converted to number is provided', () => {
        const input = ['1', 'a'];

        const cleanFn = () => {
            cleanNumbers(input);
        };

        expect(cleanFn).toThrow();
    });

    it('should throw an error if an array with at least one element is a NaN', () => {
        const input = ['1', NaN];

        const cleanFn = () => {
            cleanNumbers(input);
        };

        expect(cleanFn).toThrow();
    });

    it('should throw an error if an array with at least one element is of type different than number', () => {
        const input = ['1', true];

        const cleanFn = () => {
            cleanNumbers(input);
        };

        expect(cleanFn).toThrow();
    });
});
