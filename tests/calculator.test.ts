
import { describe, expect, test } from 'vitest'
import { calculate } from '../src/calculator';

describe('Step 1: Basic operations', () => { 

    test('1 + 2 equals 3', () => {
        expect(calculate('1 + 2')).toBe(3)
    })

    test('2 - 1 equals 1', () => {
        expect(calculate('2 - 1')).toBe(1)
    })

    test('2 * 3 equals 6', () => {
        expect(calculate('2 * 3')).toBe(6)
    })

    test('3 / 2 equals 1.5', () => {
        expect(calculate('3 / 2')).toBe(1.5)
    })

})

