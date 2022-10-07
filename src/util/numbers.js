//@ts-check

import { validateNumber, validateStringNotEmpty } from './validation.js';

/**
 *
 * @param {string} value
 * @returns {number}
 */
export function transformToNumber(value) {
    return +value;
}

/**
 *
 * @param {string[]} numberValues
 * @returns {number[]}
 */
export function cleanNumbers(numberValues) {
    const numbers = [];

    for (const numberInput of numberValues) {
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }

    return numbers;
}
