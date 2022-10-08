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

describe('hooks', () => {
    test('should have an email property', () => {
        expect(user).toHaveProperty('email');
    });

    test('should store the provided email value', () => {
        expect(user.email).toBe(testEmail);
    });

    test('should update the email', () => {
        const newTestEmail = 'test2@test.com';
        const user = new User(testEmail);
        user.updateEmail(newTestEmail);

        expect(user.email).toBe(newTestEmail);
    });

    test('should clear the email', () => {
        user.clearEmail();

        expect(user.email).toBe('');
    });

    test('should still have an email property after clearing the email', () => {
        user.clearEmail();

        expect(user).toHaveProperty('email');
    });
});
