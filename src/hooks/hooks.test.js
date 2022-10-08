import {
    test,
    expect,
    describe,
    beforeAll,
    beforeEach,
    afterAll,
    afterEach,
} from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;
// hooks

beforeAll(() => {
    user = new User(testEmail);

    console.log('beforeAll()');
});

beforeEach(() => {
    user = new User(testEmail);

    console.log('beforeEach()');
});

afterAll(() => {
    console.log('afterAll()');
});

afterEach(() => {
    // user = new User(testEmail);

    console.log('afterEach()');
});

// you can even user .concurrent on tests suites

describe('hooks', () => {
    test.concurrent('should have an email property', () => {
        expect(user).toHaveProperty('email');
    });

    test.concurrent('should store the provided email value', () => {
        expect(user.email).toBe(testEmail);
    });

    test.concurrent('should update the email', () => {
        const newTestEmail = 'test2@test.com';
        const user = new User(testEmail);
        user.updateEmail(newTestEmail);

        expect(user.email).toBe(newTestEmail);
    });

    test.concurrent('should clear the email', () => {
        user.clearEmail();

        expect(user.email).toBe('');
    });

    test.concurrent(
        'should still have an email property after clearing the email',
        () => {
            user.clearEmail();

            expect(user).toHaveProperty('email');
        }
    );
});
