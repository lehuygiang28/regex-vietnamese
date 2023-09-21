const { generateSearchQuery } = require('../lib');

describe('generateSearchQuery', () => {
    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const options = {
            keyword: 'Hà Nội',
        };
        const expectedRegex = /[h][à][ ][n][ộ][iíìỉĩị]/i;
        expect(generateSearchQuery(options)).toEqual(expectedRegex);
    });

    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const options = {
            keyword: 'Hà Nội',
            caseSensitive: false,
            ignorePunctuation: true,
        };
        const expectedRegex = /[h][aáàảãạăắằẳẵặâấầẩẫậ][ ][n][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i;
        expect(generateSearchQuery(options)).toEqual(expectedRegex);
    });

    it('should throw an error if the keyword parameter is undefined', () => {
        const options = {
            keyword: undefined,
        };
        expect(() => generateSearchQuery(options)).toThrow('Keyword parameter is required');
    });

    it('should throw an error if the keyword parameter is not a string', () => {
        const options = {
            keyword: 123,
        };
        expect(() => generateSearchQuery(options)).toThrow('Keyword parameter must be a string');
    });
});
