import { describe, expect, it } from 'vitest';
import { generateToken } from './async-example';

describe('async code', () => {
    it('should generate a token value', (done) => {
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
    }, 60000);
});
