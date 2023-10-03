const { generateRegexQuery } = require('../lib');
const { caseA, caseE, caseI, caseO, caseU, caseY, caseD } = require('../lib/constants');

describe('generateRegexQuery', () => {
    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const options = {
            keyword: 'Hà Nội',
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(generateRegexQuery(options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const options = {
            keyword: 'Hà Nội',
            sensitive: true,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`);
        expect(generateRegexQuery(options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that have sensitive case', () => {
        const options = {
            keyword: 'Hà Nội',
            sensitive: false,
            ignoreAccentedVietnamese: true,
        };
        const expectedRegex = new RegExp(`[H][${caseA}][ ][N][${caseO}][${caseI}]`, 'i');
        expect(generateRegexQuery(options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that not ignore accented', () => {
        const options = {
            keyword: 'Hà Nội',
            sensitive: false,
            ignoreAccentedVietnamese: false,
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][${caseI}]`, 'i');
        expect(generateRegexQuery(options)).toEqual(expectedRegex);
    });

    it('should throw an error if the keyword parameter is undefined', () => {
        const options = {
            keyword: undefined,
        };
        expect(() => generateRegexQuery(options)).toThrow('Keyword parameter is required');
    });

    it('should throw an error if the keyword parameter is not a string', () => {
        const options = {
            keyword: 123,
        };
        expect(() => generateRegexQuery(options)).toThrow('Keyword parameter must be a string');
    });
});
