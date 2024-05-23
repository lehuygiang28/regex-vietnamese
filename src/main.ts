import * as diacritics from 'diacritics';
import { CreateRegexOptions } from './types';
import {
    LOWER_CASE_MAP,
    UPPER_CASE_MAP,
    SAME_CASE_MAP,
    BOTH_LOWER_UPPER_CASE_MAP,
} from './constants';

/**
 * @description
 * Create a regular expression that matches a keyword with or without diacritical marks
 * and with different variations of the same letter.
 *
 * With the default options, the regex will automatically match the case is lower or upper of the keyword
 * and return the same case. If you want to change the output case, you can use the outputCase property.
 *
 * @example
 * const regex = createRegex('Hà Nội oi');
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * // With sensitive option
 * // Remove the last `i` in the regex
 * const regex = createRegex('Hà Nội oi', { sensitive: true });
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
 *
 * // With ignoreAccentedVietnamese option
 * // Ignore current Vietnamese accents and find with all accents case
 * const regex = createRegex('Hà Nội oi', { ignoreAccentedVietnamese: true });
 * console.log(regex) // /[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * @param keyword The keyword to search for.
 *
 * @property sensitive Whether the search is case sensitive or not.
 * @property ignoreAccentedVietnamese Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @property outputCase Whether the regex should match lowercase, uppercase, sameInput or both.
 * @default
 * sensitive false
 * ignoreAccentedVietnamese false
 * outputCase 'sameInput'
 *
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */

export function createRegex(keyword: string, options?: CreateRegexOptions): RegExp {
    // Check that the keyword parameter is defined.
    if (keyword === undefined || keyword === null) {
        throw new Error('Keyword parameter is required');
    }

    if (typeof keyword !== 'string') {
        throw new Error('Keyword parameter must be a string');
    }

    const {
        outputCase = 'same',
        sensitive = false,
        ignoreAccentedVietnamese = false,
    } = options || {};

    // Remove diacritical marks from the keyword.
    const normalizedKeyword: string = ignoreAccentedVietnamese
        ? diacritics.remove(keyword)
        : keyword;

    // Generate the regex string.
    const regexString = Array.from(normalizedKeyword, (char: string) => {
        let variationsSet = SAME_CASE_MAP.get(char) || char;

        switch (outputCase) {
            case 'lowerAndUpper':
                variationsSet = BOTH_LOWER_UPPER_CASE_MAP.get(char) || char;
                break;
            case 'lower':
                variationsSet = LOWER_CASE_MAP.get(char) || char.toLowerCase();
                break;
            case 'upper':
                variationsSet = UPPER_CASE_MAP.get(char) || char.toUpperCase();
                break;
            case 'same':
            default:
                variationsSet = SAME_CASE_MAP.get(char) || char;
                break;
        }

        return `[${variationsSet}]`;
    }).join('');

    return new RegExp(regexString, sensitive ? '' : 'i');
}
