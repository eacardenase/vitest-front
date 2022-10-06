import { it, expect, describe } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', () => {
    it('should return a string, no matter which value is passed in', () => {
        const input1 = 1;
        const input2 = 'invalid';
        const input3 = true;

        const result1 = generateResultText(input1);
        const result2 = generateResultText(input2);
        const result3 = generateResultText(input3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;

        const resultText = generateResultText(result);

        expect(resultText).toContain(result.toString());
    });

    it('should return empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';

        const resultText = generateResultText(result);

        expect(resultText).toBe('');
    });

    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
        const result = 'invalid';

        const resultText = generateResultText(result);

        expect(resultText).toContain('Invalid');
    });
});
