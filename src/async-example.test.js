import { describe, expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('async code', () => {
    it('should generate a token value (using callbacks)', (done) => {
        // adding an additional parameter to be called when we expect the code to finish
        const testUserEmail = 'test@test.com';

        generateToken(testUserEmail, (error, token) => {
            try {
                expect(token).toBeDefined();
                // expect(token).toBe(2); // the problem is with to... functions
                done();
            } catch (error) {
                done(error);
            }
        });
    }, 10000); // adding timeout for the test

    it('should generate a token value (using promises)', () => {
        const testUserEmail = 'test@test.com';

        // return expect(generateTokenPromise(testUserEmail)).resolves.toBe(2); // adding the return so vitest can wait for it to be resolved
        return expect(
            generateTokenPromise(testUserEmail)
        ).resolves.toBeDefined();
    });

    it('should generate a token value (using async/await)', async () => {
        const testUserEmail = 'test@test.com';

        const result = await generateTokenPromise(testUserEmail);

        return expect(result).toBeDefined();
    });
});
