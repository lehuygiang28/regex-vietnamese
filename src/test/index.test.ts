import { generateRegexQuery, TGenerateSearchQuery } from '..';
import { caseA, caseE, caseI, caseO, caseU, caseY, caseD, sideUppercaseMap } from '../constants';

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

    it('should generate a regex with all is lowercase', () => {
        const keyword = 'Hà Nội';
        const options: TGenerateSearchQuery = {
            outputCaseOptions: 'lowercase',
        };
        const expectedRegex = new RegExp(`[h][à][ ][n][ộ][${caseI}]`, 'i');
        expect(generateRegexQuery(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regex with same case', () => {
        const keyword = 'hà NộI';
        const options: TGenerateSearchQuery = {
            outputCaseOptions: 'sameInput',
        };
        const expectedRegex = new RegExp(`[h][à][ ][N][ộ][${sideUppercaseMap.get('i')}]`, 'i');
        expect(generateRegexQuery(keyword, options)).toEqual(expectedRegex);
    });
});
