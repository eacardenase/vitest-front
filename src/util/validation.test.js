import { it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw an error if input is an empty string', () => {
    const input = '';

    const resultFc = () => validateStringNotEmpty('');

    expect(resultFc).toThrow(/Invalid input/);
});

it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';

    const resultFc = () => validateStringNotEmpty(input);

    expect(resultFc).toThrow(/must not be empty/);
});

it('should throw an error if a long string of white spaces is provided', () => {
    const input = '                 ';

    const resultFc = () => validateStringNotEmpty(input);

    expect(resultFc).toThrow();
});

it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = false;
    const inputObj = {};

    const validationFcNum = () => validateStringNotEmpty(inputNum);
    const validationFcBool = () => validateStringNotEmpty(inputBool);
    const validationFcObj = () => validateStringNotEmpty(inputObj);

    expect(validationFcNum).toThrow();
    expect(validationFcBool).toThrow();
    expect(validationFcObj).toThrow();
});

it('should not throw an error if a non-empty string is provided', () => {
    const input = 'valid string';

    const resultFc = () => validateStringNotEmpty(input);

    expect(resultFc).not.toThrow();
});

it('should throw an error if input is not a number - NaN', () => {
    const input = NaN;

    const resultFc = () => validateNumber(input);

    expect(resultFc).toThrow(/Invalid number/);
});

it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';

    const resultFc = () => validateNumber(input);

    expect(resultFc).toThrow();
});

it('should not throw an error if a number is provided', () => {
    const input = 123;

    const resultFc = () => validateNumber(input);

    expect(resultFc).not.toThrow();
});
