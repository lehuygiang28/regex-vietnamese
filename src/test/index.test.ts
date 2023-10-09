import { generateRegexQuery, TGenerateSearchQuery } from '..';
import { caseA, caseE, caseI, caseO, caseU, caseY, caseD } from '../constants';

describe('generateRegexQuery', () => {
    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const keyword = 'Hà Nội';
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(generateRegexQuery(keyword)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const keyword = 'Hà Nội';
        const options: TGenerateSearchQuery = {
            sensitive: true,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`);
        expect(generateRegexQuery(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that have sensitive case', () => {
        const keyword = 'Hà Nội';
        const options: TGenerateSearchQuery = {
            sensitive: false,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`, 'i');
        expect(generateRegexQuery(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that not ignore accented', () => {
        const keyword = 'Hà Nội';
        const options: TGenerateSearchQuery = {
            sensitive: false,
            ignoreAccentedVietnamese: false,
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(generateRegexQuery(keyword, options)).toEqual(expectedRegex);
    });

    it('should throw an error if the keyword parameter is undefined', () => {
        const keyword = undefined;
        expect(() => generateRegexQuery(keyword as any)).toThrow('Keyword parameter is required');
    });

    it('should throw an error if the keyword parameter is not a string', () => {
        const keyword = 123;
        expect(() => generateRegexQuery(keyword as any)).toThrow(
            'Keyword parameter must be a string',
        );
    });
});
