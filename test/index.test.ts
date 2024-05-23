import { createRegex, CreateRegexOptions } from '../src';
import { caseA, caseE, caseI, caseO, caseU, caseY, caseD, UPPER_CASE_MAP } from '../src/constants';

describe('createRegex', () => {
    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const keyword = 'Hà Nội';
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(createRegex(keyword)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            sensitive: true,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`);
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that have sensitive case', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            sensitive: false,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`, 'i');
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that not ignore accented', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            sensitive: false,
            ignoreAccentedVietnamese: false,
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    it('should throw an error if the keyword parameter is undefined', () => {
        const keyword = undefined;
        expect(() => createRegex(keyword as any)).toThrow('Keyword parameter is required');
    });

    it('should throw an error if the keyword parameter is not a string', () => {
        const keyword = 123;
        expect(() => createRegex(keyword as any)).toThrow('Keyword parameter must be a string');
    });

    it('should generate a regex with all is lowercase', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            outputCase: 'lower',
        };
        const expectedRegex = new RegExp(`[h][à][ ][n][ộ][${caseI}]`, 'i');
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regex with same case', () => {
        const keyword = 'hà NộI';
        const options: CreateRegexOptions = {
            outputCase: 'same',
        };
        const expectedRegex = new RegExp(`[h][à][ ][N][ộ][${UPPER_CASE_MAP.get('i')}]`, 'i');
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });
});
