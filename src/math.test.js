import { expect, it } from 'vitest';
import { add } from './math';

it('Should summarize all number values in an array', () => {
    const result = add([1, 2, 3]);

    expect(result).toBe(6);
});
